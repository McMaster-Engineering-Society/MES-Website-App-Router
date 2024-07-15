import { Accordion, AccordionItem } from '@nextui-org/react';

import PageLayout from '@/components/layout/PageLayout';
import NextImage from '@/components/NextImage';
import PageHeading from '@/components/PageHeading';
import PageSection from '@/components/PageSection';

export default function WellnessPage() {
  return (
    <PageLayout>
      <main className='layout'>
        <section>
          <PageHeading title='Wellness' preTitle='Learn About' variant='blue' />
          <PageSection heading='What is Wellness?' variant='blue'>
            <div className='flex flex-col-reverse items-center gap-x-4 gap-y-4 sm:flex-row'>
              <div>
                University can be a very stressful time for students, given the
                copious amounts of choices and commitments students usually find
                themselves allocating their time to. However, this time also has
                the potential to be the most fulfilling and meaningful
                experience of our lives, and we believe that to reach one’s
                potential, they must prime themselves to bring forth their best
                in all they engage in. The Wellness team is committed to
                providing students with the resources and opportunities
                necessary to help them take charge of their physical and mental
                health, driven by the goal to allow every student to tap into
                what they are truly capable of.
              </div>
              <NextImage
                src='/images/wellness/bunny.png'
                alt=''
                width={201}
                height={150}
                className='w-full'
              />
            </div>
          </PageSection>
          <PageSection heading='MES Wellness & Initiatives' variant='blue'>
            <div className='row flex flex-col items-center gap-x-8 gap-y-4 sm:flex-row'>
              <NextImage
                src='/images/wellness/bros.png'
                alt=''
                width={213}
                height={198}
                className='w-1/2 sm:w-full'
              />
              <div>
                The wellness committee plans numerous events through the year,
                ranging from Smash Bros. tournaments, paint nights, board game
                nights, and baked good decorating to help connect students to
                things they enjoy doing with other students to promote healthy
                work-life balance within the student body. Throughout the school
                year, you might find us giving out wellness swag bags, snacks,
                or pancakes to help brighten up a student’s day.
                <br />
                <br />
                Given that the fall semester is going to be online, taking care
                of your physical and mental health is more important than it
                ever has been before!
                <br />
                <br />
                To help students acclimate to the at-home situation, we will be
                hosting wellness workshops throughout the semester to address
                simple, practical ways that students can better manage their
                health. These can potentially include guided meditations, short
                at-home exercises, nutrition workshops, and more!
              </div>
            </div>
            <div className='row mt-8 flex flex-col-reverse items-center gap-x-8 gap-y-4 sm:flex-row'>
              <div>
                Additionally, the Wellness Committee will be in active
                communication with other universities’ Wellness administrators
                in Ontario to determine the best initiatives and resources we
                can provide to help students with online learning. As this is a
                new situation that everyone is still learning to adjust to, we
                want to be sure we are involved and contributing to the mental
                health/wellness conversation to better serve McMaster
                Engineering students.
                <br />
                <br />
                We will also be pushing to be very involved on social media,
                regularly posting practical wellness tips and practices to
                remind students to put their health first. Additionally, we want
                to foster a community within McMaster Engineering that
                understands the value of taking care of one’s self and helping
                others, which will be done through the creation of wellness
                initiatives and challenges throughout the year to push students
                to be more conscious of their good and bad habits. Through
                raising awareness and incentivising students to address their
                wellness habits and goals, we believe students can succeed with
                achieving their goals, all the while feeling great while they do
                it.
              </div>
              <NextImage
                src='/images/wellness/llama.png'
                alt=''
                width={213}
                height={198}
                className='w-1/2 sm:w-full'
              />
            </div>
          </PageSection>
          <PageSection heading='Student Wellness Resources' variant='blue'>
            <Accordion>
              <AccordionItem title='Crisis Support'>
                <div style={{ textAlign: 'left' }}>
                  <li>
                    911/EFRT (
                    <a href='https://wellness.mcmaster.ca/crisis-support/#tab-content-emergency-support'>
                      <b>Click for on campus resources</b>
                    </a>
                    )
                  </li>
                  <li>
                    Suicide help line:{' '}
                    <a href='www.crisisservicescanada.ca/en'>
                      <b>www.crisisservicescanada.ca/en</b>
                    </a>
                  </li>
                  <li>
                    Sexual Assault and Domestic Violence Care center:{' '}
                    <a href='www.hamiltonhealthsciences.ca'>
                      <b>www.hamiltonhealthsciences.ca</b>
                    </a>
                  </li>
                  <li>
                    Barrett Centre for Crisis Support:{' '}
                    <a href='www.goodshepherdcentres.ca'>
                      <b>www.goodshepherdcentres.ca</b>
                    </a>
                  </li>
                </div>
              </AccordionItem>
              <AccordionItem title='General'>
                <div style={{ textAlign: 'left' }}>
                  <li>
                    Student Wellness Centre: call <b>905-525-9140 x 27700</b> or{' '}
                    <b>visit PGCLL 210</b> to book a 15 minute counselor
                    consultation
                  </li>
                  <li>Marauders' Map (safe places in and around campus)</li>
                  <li>
                    Open Circles group sessions:{' '}
                    <a href='opencircle.mcmaster.ca'>
                      <b>opencircle.mcmaster.ca</b>
                    </a>
                  </li>
                </div>
              </AccordionItem>
              <AccordionItem title='Mental Health and Illness'>
                <div style={{ textAlign: 'left' }}>
                  <li>
                    <a href='https://msumcmaster.ca/info/health-dental-insurance/sap/'>
                      <b>Student Assistance Plan</b>
                    </a>
                  </li>
                  <li>
                    <a href='https://www.stjoes.ca/hospital-services/mental-health-addiction-services/mental-health-services/youth-wellness-centre'>
                      <b>Mobile Youth Wellness Centre</b>
                    </a>
                  </li>
                  <li>
                    <a href='wellness.mcmaster.ca/resources/websites/'>
                      Illness-Specific websites:{' '}
                      <b>wellness.mcmaster.ca/resources/websites/</b>
                    </a>
                  </li>
                  <li>
                    <a href='wellness.mcmaster.ca/resources/apps/'>
                      Illness-Specific Mobile Applications:{' '}
                      <b>wellness.mcmaster.ca/resources/apps/</b>
                    </a>
                  </li>
                  <li>
                    <a href='wellness.mcmaster.ca/resources/welltrack/'>
                      Interactive Self-Help Therapy Mobile Application:{' '}
                      <b>wellness.mcmaster.ca/resources/welltrack/</b>
                    </a>
                  </li>
                  <li>
                    <a href='https://www.youtube.com/watch?v=z-IR48Mb3W0'>
                      <b>What is depression? - Helen M. Farrell</b>
                    </a>
                  </li>
                  <li>
                    <a href='www.suicideprevention.ca/Im-Having-Thoughts-of-Suicide'>
                      Understand and Address Suicidal Ideation:
                      <b>
                        {' '}
                        www.suicideprevention.ca/Im-Having-Thoughts-of-Suicide
                      </b>
                    </a>
                  </li>
                  <li>
                    <a href='www.sfu.ca/carmha/publications/positive-coping-with-health-conditions.html'>
                      Online coping workbook:{' '}
                      <b>
                        {' '}
                        www.sfu.ca/carmha/publications/positive-coping-with-health-conditions.html
                      </b>
                    </a>
                  </li>
                  <li>
                    <a href='wellness.mcmaster.ca/resources/#tab-content-out-of-province-international'>
                      International Mental Health Resources:{' '}
                      <b>
                        wellness.mcmaster.ca/resources/#tab-content-out-of-province-international
                      </b>
                    </a>
                  </li>
                  <li>
                    <a href='bouncebackontario.ca/'>
                      Bounce back Ontario: <b> bouncebackontario.ca/</b>
                    </a>
                  </li>
                  <li>
                    <a href='youthlink.ca/'>
                      Youthlink: <b> youthlink.ca/</b>
                    </a>
                  </li>
                  <li>
                    <a href='www.whatsupwalkin.ca/ '>
                      What's Up Walkin: <b> www.whatsupwalkin.ca/ </b>
                    </a>
                  </li>
                  <li>
                    <a href='good2talk.ca/'>
                      Good2Talk: <b> good2talk.ca/</b>
                    </a>
                  </li>
                </div>
              </AccordionItem>
              <AccordionItem title='Physical Health'>
                <div style={{ textAlign: 'left' }}>
                  <li>
                    <a href='rec.mcmaster.ca/facilities'>
                      David Braley Athletic Centre (DBAC):{' '}
                      <b> rec.mcmaster.ca/facilities</b>
                    </a>
                  </li>
                  <li>
                    <a href='wellness.mcmaster.ca/topics/physical-health/'>
                      Immunization:{' '}
                      <b> wellness.mcmaster.ca/topics/physical-health/</b>
                    </a>
                  </li>
                  <li>
                    <a href='wellness.mcmaster.ca/topics/physical-health/#tab-content-minor-injur'>
                      Minor Injuries:
                      <b>
                        {' '}
                        wellness.mcmaster.ca/topics/physical-health/#tab-content-minor-injuries
                      </b>
                    </a>
                  </li>
                  <li>
                    <a href='wellness.mcmaster.ca/topics/food-and-nutrition/'>
                      Balanced Diet:
                      <b> wellness.mcmaster.ca/topics/food-and-nutrition/</b>
                    </a>
                  </li>
                </div>
              </AccordionItem>
              <AccordionItem title='Sexual Health'>
                <div style={{ textAlign: 'left' }}>
                  <li>
                    <a href='svpro.mcmaster.ca/contact/'>
                      Sexual Violence Prevention and Response Office contact
                      details: <b> svpro.mcmaster.ca/contact/</b>
                    </a>
                  </li>
                  <li>
                    <a href='sacha.ca/'>
                      Sexual Assault Center - Hamilton Area (SACHA):{' '}
                      <b> sacha.ca/</b>
                    </a>
                  </li>
                  <li>
                    <a href='www.awhl.org/home'>
                      Assaulted Women's Helpline:<b> www.awhl.org/home</b>
                    </a>
                  </li>
                  <li>
                    <a href='www.youthline.ca/'>
                      LGBT Youthline: <b> www.youthline.ca/</b>
                    </a>
                  </li>
                </div>
              </AccordionItem>
              <AccordionItem title='Self-Care'>
                <div style={{ textAlign: 'left' }}>
                  <li>
                    <a href='wellness.mcmaster.ca/topics/relationships/'>
                      Living with Room mates:
                      <b> wellness.mcmaster.ca/topics/relationships/</b>
                    </a>
                  </li>
                  <li>
                    <a href='wellness.mcmaster.ca/topics/sleep/'>
                      Sleep: <b> wellness.mcmaster.ca/topics/sleep/</b>
                    </a>
                  </li>
                  <li>
                    <a href='wellness.mcmaster.ca/topics/addictions/'>
                      Addiction: <b> wellness.mcmaster.ca/topics/addictions/</b>
                    </a>
                  </li>
                </div>
              </AccordionItem>
            </Accordion>
          </PageSection>
        </section>
      </main>
    </PageLayout>
  );
}
