import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import {
  ApolloIcon,
  GraphqlIcon,
  NodeJsIcon,
  TerraformIcon,
  TypescriptIcon,
} from '@/components/Icons'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Younes Be</title>
        <meta
          name="description"
          content="I’m Younes Be. I live in Strasbourg City, where I resolve problems."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Problem Solver and Innovator Dedicated to Making a Positive Impact
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Hello, my name is Younes Be and I&apos;m based in Strasbourg
                City. As a problem solver, I&apos;m dedicated to finding
                effective solutions that improve people&apos;s lives and make a
                positive impact on the community.
              </p>
              <p>
                Living in Strasbourg City, I&apos;m inspired by the vibrant
                culture and diverse perspectives of the people around me. I
                enjoy working with individuals and organizations to address
                complex challenges and develop innovative approaches to
                problem-solving.
              </p>
              <p>
                Whether it&apos;s developing software solutions, addressing
                operational inefficiencies, or improving customer experiences,
                I&apos;m passionate about helping others overcome obstacles and
                achieve their goals.
              </p>
              <p>
                Thank you for your interest and I look forward to the
                opportunity to work with you in the future.
              </p>
            </div>

            <div className="flex w-full">
              <div className="flex-1">
                <h3 className="mt-4 text-lg font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl">
                  Stack:
                </h3>
                <div className="mt-4 grid grid-cols-6 items-center justify-between gap-4 gap-y-11 dark:text-white">
                  <div className="col-span-2 flex flex-col items-center space-y-3 duration-700 hover:scale-110 hover:cursor-pointer">
                    <TypescriptIcon />
                    <span>Typescript</span>
                  </div>
                  <div className="col-span-2 flex flex-col items-center space-y-3 duration-700 hover:scale-110 hover:cursor-pointer">
                    <ApolloIcon />
                    <span>Apollo</span>
                  </div>
                  <div className="col-span-2 flex flex-col items-center space-y-3 duration-700 hover:scale-110 hover:cursor-pointer">
                    <GraphqlIcon />
                    <span>Graphql</span>
                  </div>
                  <div className="col-span-2 col-start-2 flex flex-col items-center space-y-3 duration-700 hover:scale-110 hover:cursor-pointer">
                    <NodeJsIcon />
                    <span>NodeJS</span>
                  </div>
                  <div className="col-span-2 flex flex-col items-center space-y-3 duration-700 hover:scale-110 hover:cursor-pointer">
                    <TerraformIcon />
                    <span>Terraform</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/YBeaila" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/younes_bee/"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://github.com/Skayfa"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/younes-beaila/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:beailayounes@outlook.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                beailayounes@outlook.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
