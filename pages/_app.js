import App, { Container } from 'next/app';
import React from 'react';
import PageSetup from './PageSetup';
import { ThemeProvider, defaultTheme } from '../src';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {
      isNested: router.route.match(/\//g).length > 1,
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
