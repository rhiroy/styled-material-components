import App, { Container } from 'next/app';
import React from 'react';
import PageSetup from './enhancers/PageSetup';
import { ThemeProvider, defaultTheme } from '../src';

/**
 * This method checks to see if a page is deeply nested.
 * We want to apply our PageSetup wrapper to top-level pages only.
 */
const isNested = ({ route }) => {
  if (route.includes('/docs/components/')) {
    return route.match(/\//g).length > 3;
  }
  return route.match(/\//g).length > 2;
};

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {
      isNested: isNested(router),
    };

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ThemeProvider theme={defaultTheme}>
          {pageProps.isNested ? (
            <Component {...pageProps} />
          ) : (
            <PageSetup>
              <Component {...pageProps} />
            </PageSetup>
          )}
        </ThemeProvider>
      </Container>
    );
  }
}
