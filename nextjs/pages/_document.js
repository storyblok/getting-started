import Document, { Html, Head, Main, NextScript } from "next/document";
import StoryblokService from '../utils/storyblok-service'

class MyDocument extends Document {
  render() {
    return (
      <Html>
         <Head>
          <script dangerouslySetInnerHTML={{__html: `var StoryblokCacheVersion = '${StoryblokService.getCacheVersion()}';` }}></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
