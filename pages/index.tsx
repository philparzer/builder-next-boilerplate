import React from 'react';
import { useRouter } from 'next/router';
import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';
import DefaultErrorPage from 'next/error';
import Head from 'next/head';
import type { GetStaticPropsContext } from 'next';
import "../builder.config"
import LanguageSwitch from '@/components/LanguageSwitch';

// Initialize the Builder SDK with your public API key
if (!process.env.NEXT_PUBLIC_BUILDER_API_KEY) {throw new Error('Missing NEXT_PUBLIC_BUILDER_API_KEY env var')}
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);


// Define a function that fetches the Builder 
// content for home
export async function getStaticProps({ params, locale }: GetStaticPropsContext) {
  // Fetch the builder content for the given page
  const page = await builder
    .get('page', {
      userAttributes: {
        urlPath: '/' + (params && Array.isArray(params?.page) ? params.page.join('/') : ''),
      },
    })
    .toPromise();

  // Return the page content as props
  return {
    props: {
      page: page || null,
      locale: locale || null,
    },
    // Revalidate the content every 5 seconds
    revalidate: 5,
  };
}
  

// Define the Page component
export default function Page({ page, locale }: any) {
  const router = useRouter();
  const isPreviewing = useIsPreviewing();

  // If the page is still being generated, 
  // show a loading message
  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  // If the page content is not available 
  // and not in preview mode, show a 404 error page
  if (!page && !isPreviewing) {
    return <DefaultErrorPage statusCode={404} />
  }

  // If the page content is available, render 
  // the BuilderComponent with the page content
  return (
    <>
      <Head>
        <title>{page?.data.title}</title>
      </Head>
      {/* Render the Builder page */}
      <nav>
        <LanguageSwitch />
      </nav>
      <BuilderComponent data={{ locale: locale }} model="page" content={page} />
      <footer>

      </footer>
    </>
  );
}