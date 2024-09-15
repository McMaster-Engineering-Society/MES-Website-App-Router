'use client';

import {
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
} from '@nextui-org/react';
import Fuse from 'fuse.js';
import Link from 'next/link';
import Papa, { ParseResult } from 'papaparse';
import * as path from 'path';
import { useMemo, useState } from 'react';
import { useEffect } from 'react';
import { IconType } from 'react-icons';
import { BsMicrosoftTeams } from 'react-icons/bs';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSearch,
  FaTwitter,
} from 'react-icons/fa';
import {
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaGlobe,
  FaLink,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa6';
import { SiLinktree } from 'react-icons/si';

import IconButton from '@/components/buttons/IconButton';
import ProfilePicture from '@/components/clubs-and-teams/ProfilePicture';
import PageLayout from '@/components/layout/PageLayout';

const socialMediaIcon: Record<string, { icon: IconType; tooltip: string }> = {
  Instagram: { icon: FaInstagram, tooltip: 'Instagram' },
  'Website / Main Online Info Page': { icon: FaGlobe, tooltip: 'Website' },
  LinkTree: { icon: SiLinktree, tooltip: 'LinkTree' },
  Facebook: { icon: FaFacebookF, tooltip: 'Facebook' },
  LinkedIn: { icon: FaLinkedinIn, tooltip: 'LinkedIn' },
  Tiktok: { icon: FaTiktok, tooltip: 'Tiktok' },
  Twitter: { icon: FaTwitter, tooltip: 'Twitter' },
  YouTube: { icon: FaYoutube, tooltip: 'YouTube' },
  GitHub: { icon: FaGithub, tooltip: 'GitHub' },
  Teams: { icon: BsMicrosoftTeams, tooltip: 'Teams' },
  Discord: { icon: FaDiscord, tooltip: 'Discord' },
  'Mailing List': { icon: FaEnvelope, tooltip: 'Mailing List' },
};

type ClubTeam = {
  Type: string;
  Acronym: string;
  'Organization Name': string;
  Logo: string;
  Emails: string;
  'Instagram Handle': string;
  Instagram: string;
  'Website / Main Online Info Page': string;
  LinkTree: string;
  Facebook: string;
  LinkedIn: string;
  Tiktok: string;
  Twitter: string;
  YouTube: string;
  GitHub: string;
  Teams: string;
  Discord: string;
  'Mailing List': string;
  logoImage: string; // Preloaded image path
};

const ClubsAndTeams = () => {
  const [clubsAndTeams, setClubsAndTeams] = useState<ClubTeam[]>([]);
  const [query, updateQuery] = useState('');

  const fuse = useMemo(() => {
    const fuseOptions = {
      keys: ['Organization Name'],
      isCaseSensitive: false,
      threshold: 0.3,
      includeScore: true,
      shouldSort: true,
      distance: 100,
    };
    return new Fuse(clubsAndTeams, fuseOptions);
  }, [clubsAndTeams]);

  // Fetch data and preload image paths
  const fetchData = async () => {
    const filePath = path.resolve(
      __dirname,
      'csvs/clubs-master-contact-&-socials-list.csv',
    );
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const csvText = await response.text();

    const result = await new Promise<ParseResult<ClubTeam>>((resolve) => {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => resolve(result as ParseResult<ClubTeam>),
      });
    });

    const parsedData = result?.data?.map((item) => {
      const clubTeam: ClubTeam = {
        Type: item['Type'],
        Acronym: item['Acronym'],
        'Organization Name': item['Organization Name'],
        Logo: item['Logo'],
        Emails: item['Emails'],
        'Instagram Handle': item['Instagram Handle'],
        Instagram: item['Instagram'],
        'Website / Main Online Info Page':
          item['Website / Main Online Info Page'],
        LinkTree: item['LinkTree'],
        Facebook: item['Facebook'],
        LinkedIn: item['LinkedIn'],
        Tiktok: item['Tiktok'],
        Twitter: item['Twitter'],
        YouTube: item['YouTube'],
        GitHub: item['GitHub'],
        Teams: item['Teams'],
        Discord: item['Discord'],
        'Mailing List': item['Mailing List'],
        // Preload image paths
        logoImage: item['Instagram Handle']
          ? `/images/clubs-and-teams/${item['Instagram Handle']}.jpg`
          : '/images/placeholder.jpg', // Use a placeholder if the Instagram handle is missing
      };

      return clubTeam;
    });

    setClubsAndTeams(parsedData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Memoize filtered results based on the query
  const filteredResults = useMemo(() => {
    if (query.trim()) {
      return fuse.search(query).map(({ item }) => item);
    }
    return clubsAndTeams;
  }, [query, clubsAndTeams, fuse]);

  return (
    <PageLayout>
      <main className="layout">
        <div className="search-box">
          <Input
            type="string"
            label="Search"
            className="search-bar"
            classNames={{
              inputWrapper: 'shadow-xl',
            }}
            value={query}
            onChange={(e) => updateQuery(e.target.value)}
          />
          <FaSearch className="search-icon" />
        </div>
        <section id="clubs-and-teams-list">
          <ul className="grid grid-cols-1 gap-x-12 gap-y-4 lg:grid-cols-2">
            {filteredResults.map((clubTeam) => (
              <li key={clubTeam.Acronym}>
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center gap-x-4">
                    <div className="h-12 w-12 min-w-[3rem] overflow-clip rounded-full bg-white shadow-lg">
                      <ProfilePicture
                        imagePath={clubTeam.logoImage}
                        alt={`${clubTeam.Acronym}'s profile picture`}
                      />
                    </div>
                    <div className="flex max-w-[12rem] flex-col truncate sm:max-w-sm">
                      {clubTeam['Organization Name'].length > 40 ? (
                        <Tooltip
                          content={clubTeam['Organization Name']}
                          placement="bottom"
                        >
                          <span className="truncate font-bold">
                            {clubTeam['Organization Name']}
                          </span>
                        </Tooltip>
                      ) : (
                        <span className="truncate font-bold">
                          {clubTeam['Organization Name']}
                        </span>
                      )}
                      <span
                        className="cursor-pointer text-xs italic text-gray-600 hover:underline"
                        onClick={() => {
                          if (clubTeam['Instagram Handle']) {
                            window.open(
                              `https://www.instagram.com/${clubTeam['Instagram Handle']}`,
                              '_blank',
                            );
                          } else {
                            window.open(`mailto:${clubTeam['Emails']}`, '_blank');
                          }
                        }}
                      >
                        {clubTeam['Instagram Handle']
                          ? `@${clubTeam['Instagram Handle']}`
                          : clubTeam['Emails']}
                      </span>
                    </div>
                  </div>
                  <div className="button-icons flex flex-row">
                    <Popover placement="left">
                      <PopoverTrigger>
                        <div className="flex items-center justify-center rounded-full p-2 text-gray-600 transition-all hover:bg-gray-200/25 hover:shadow-md active:translate-y-[2px] active:bg-gray-400/25 active:shadow-none">
                          <FaLink />
                        </div>
                      </PopoverTrigger>
                      <PopoverContent>
                        <div className="clubs-and-teams-links flex flex-row flex-wrap gap-x-2">
                          {Object.entries(clubTeam)
                            .filter(([key, value]) => {
                              return (
                                ![
                                  'Type',
                                  'Acronym',
                                  'Organization Name',
                                  'Logo',
                                  'Emails',
                                  'Instagram Handle',
                                ].includes(key) && value !== ''
                              );
                            })
                            .map(([key, value]) => {
                              const Icon = socialMediaIcon[key]?.icon;
                              return Icon ? (
                                <Link
                                  key={`social-media-${clubTeam.Acronym}`}
                                  href={value}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <Tooltip
                                    showArrow
                                    content={socialMediaIcon[key]['tooltip']}
                                    placement="bottom"
                                  >
                                    <IconButton
                                      id={`footer-social-media-icon-${clubTeam.Acronym}`}
                                      variant="ghost"
                                      className="rounded-full"
                                      icon={Icon}
                                      classNames={{
                                        icon: 'text-gray-700',
                                      }}
                                    />
                                  </Tooltip>
                                </Link>
                              ) : null;
                            })}
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </PageLayout>
  );
};

export default ClubsAndTeams;
