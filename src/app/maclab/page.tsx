'use client';

import {
  Button,
  getKeyValue,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';
import { useAsyncList } from '@react-stately/data';
import Papa, { ParseResult } from 'papaparse';
import * as path from 'path';
import React, { useEffect, useState } from 'react';

import PageLayout from '@/components/layout/PageLayout';
import ButtonLink from '@/components/links/ButtonLink';
import PageHeading from '@/components/PageHeading';
import PageSection from '@/components/PageSection';

// Table cell type
type spendings = {
  key: string;
  department: string;
  description: string;
  amount: string;
  year: string;
};

// Table columns
const columns = [
  { key: 'key', label: 'Key' },
  { key: 'department', label: 'Department' },
  { key: 'description', label: 'Description' },
  { key: 'amount', label: 'Amount' },
  { key: 'year', label: 'Year' },
];

export default function MacLABPage() {
  const [today, setToday] = useState<Date>(new Date());

  useEffect(() => {
    setToday(new Date());
  }, []);

  const optOutDueDate = new Date('December 15, 2023 12:00:00');

  // Asynchronous fething from the maclab-spending.csv
  const fetchData = async () => {
    const filePath = path.resolve(__dirname, 'excels/maclab-spending.csv');
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const csvText = await response.text();

    const result = await new Promise<ParseResult<spendings>>((resolve) => {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => resolve(result as ParseResult<spendings>),
      });
    });

    const parsedData = result?.data?.map((item, index) => ({
      key: index.toString(),
      department: item.department,
      description: item.description,
      amount: parseAmount(item.amount),
      year: item.year,
    }));

    return {
      data: parsedData,
    };
  };

  // Function to parse amount strings into numerical spending values
  const parseAmount = (amount: string): string => {
    const parsedAmount = Number(amount.replace(/[^\d.-]/g, '')).toFixed(2);
    return parsedAmount;
  };

  // Hook for loading of data in funding breakdown
  const [isLoading, setIsLoading] = React.useState(true);

  // AsyncList for load and sort operations on the table values
  const list = useAsyncList({
    async load() {
      const result = await fetchData();

      setIsLoading(false);

      return {
        items: result.data || [],
      };
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async sort({ items, sortDescriptor }: { items: any; sortDescriptor: any }) {
      return {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        items: items.sort((a: any, b: any) => {
          const first = a[sortDescriptor.column as keyof spendings];
          const second = b[sortDescriptor.column as keyof spendings];
          let cmp =
            (parseInt(first) || first) < (parseInt(second) || second) ? -1 : 1;

          if (sortDescriptor.direction === 'descending') {
            cmp *= -1;
          }

          return cmp;
        }),
      };
    },
  });

  return (
    <PageLayout>
      <main className='layout'>
        <section>
          <PageHeading preTitle='Learn About' title='macLAB Funding' />
          <PageSection heading='What is macLAB?' variant='white'>
            <span>
              In response to an increasing need to renew and update McMaster
              Engineering’s undergraduate lab facilities, the McMaster
              Laboratory Advancement Benefaction Endowment Fund, or macLAB
              Endowment Fund, was initiated by Engineering students and faculty
              in 1997. The constant renewal and upgrading of undergraduate
              laboratory facilities ensures that McMaster undergraduate
              Engineering students are exposed to the most recent developments
              in their fields of study, and that graduates of McMaster
              Engineering possess the skills needed in the Engineering
              workforce. macLAB is a student-funded program.{' '}
              <u>
                Each year, engineering students contribute $50 of their tuition
                to the fund; however, the donation to the fund is entirely
                voluntary.
              </u>{' '}
              If a student feels that it isn’t in their best interests to
              contribute to this program, they can have the value of their
              donation credited to their student account (i.e. there is no money
              transaction). Any member or student of a department within the
              Faculty of Engineering can apply for financial aid to upgrade
              their undergraduate laboratory facilities, or to fund special
              projects benefiting their undergraduate student body. macLAB
              represents the hard work and foresight of a student body committed
              to ensuring a high quality of education both for themselves, and
              all future McMaster Engineering students.
            </span>
            <br />
            <br />
            <span>
              <b>
                In the 2023-2024 school year, macLAB disbursed $215,793.83,
                allocated to 15 different projects across several engineering
                departments and teams. Donation receipts will be issued by
                Financial Services by February 28 of the following year, as
                recommended by the Canada Revenue Agency so that donors can
                claim their donations on their income tax returns.
              </b>{' '}
              The requested project funding for 2023-2024 totalled $415,410.45.
              The full list of last year's (2023-2024) project funding can be
              seen below.
            </span>
            <div className='mt-4 flex flex-col gap-4 md:flex-row'>
              <ButtonLink
                target='_blank'
                href='/docs/2024-2025-maclab-funding-application.docx'
              >
                Receive macLAB Funding Application
              </ButtonLink>
              <ButtonLink href='/excels/2024_macLAB_ALLOCATIONS.xlsx'>
                View past funding breakdown
              </ButtonLink>
            </div>
          </PageSection>
          <PageSection variant='white' heading='Opting Out'>
            <div className='flex flex-col gap-4'>
              <span>
                In light of this, we ask you for your continued support of this
                program. If you feel that contributing to the macLAB fund is not
                in your best interest, you can have the value of the donation
                credited to your student account by filling out the opt-out
                form.
                <br />
                <br />
                To opt-out please follow the instructions on the form and note
                that the opt-out period closes <b>Dec 13th, 2024</b>. If you
                have any questions or concerns, please contact the macLAB Chair,
                Shar Cai, at{' '}
                <a className='underline' href='mailto:macLAB@macengsociety.ca'>
                  macLAB@macengsociety.ca
                </a>
                .
              </span>
              {today < optOutDueDate ? (
                <ButtonLink href='https://forms.gle/LBJG5kf2zpY8GPSH8'>
                  Opt-Out of macLAB
                </ButtonLink>
              ) : (
                <Button disabled>macLAB opt-out coming soon</Button>
              )}
            </div>
          </PageSection>
          <PageSection
            heading='Board of Directors and macLAB Chair'
            variant='white'
          >
            <span>
              The macLAB Board of Directors (BoD) consists of all engineering
              department student representatives (voting members) and faculty
              administrative staff (non-voting members). These department
              representatives are responsible for presenting applications for
              macLAB funding and voting as a collective on the distribution of
              funds across the requested projects. The macLAB Chair position is
              an Appointed Coordinator position in the MES and is responsible
              for presiding over the BoD and administering the opt-out period.
              To apply for this position, please refer to the information
              provided by the MES regarding Appointed Coordinator positions and
              applications. For any further questions contact the MacLab Chair
              at{' '}
              <a href='mailto:macLAB@macengsociety.ca'>
                macLAB@macengsociety.ca
              </a>{' '}
              or the MES VP Academic at{' '}
              <a href='mailto:vp.academic@macengsociety.ca'>
                vp.academic@macengsociety.ca
              </a>{' '}
              .
            </span>
          </PageSection>
        </section>
        <section>
          <PageSection heading='Past Funding Breakdown' variant='white'>
            <div
              style={{
                height: '400px',
                overflow: 'auto',
                padding: '5px',
              }}
            >
              <Table
                aria-label='MacLab Funding Breakdown'
                sortDescriptor={list.sortDescriptor}
                onSortChange={list.sort}
                isHeaderSticky={true}
              >
                <TableHeader>
                  {columns
                    .filter((column) => column.key !== 'key')
                    .map((column) => (
                      <TableColumn
                        key={column.key}
                        allowsSorting
                        style={{ minWidth: '100px' }}
                      >
                        {column.label}
                      </TableColumn>
                    ))}
                </TableHeader>
                <TableBody
                  items={list.items as spendings[]}
                  isLoading={isLoading}
                  loadingContent={<Spinner label='Loading...' />}
                >
                  {(item) => (
                    <TableRow key={item.key}>
                      {(columnKey) => (
                        <TableCell
                          style={{
                            textAlign:
                              columnKey === 'amount' ? 'right' : 'left',
                          }}
                        >
                          {getKeyValue(item, columnKey)}
                        </TableCell>
                      )}
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </PageSection>
        </section>
      </main>
    </PageLayout>
  );
}
