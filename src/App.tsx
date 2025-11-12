import { CloudFrontThemeProvider } from './hooks/use-cloudfront-theme';
import { CloudFrontThemeDemo } from './components/cloudfront-theme-demo';
import { bayerSansClasses } from './lib/bayer-sans';

function App() {
  return (
    <CloudFrontThemeProvider defaultTheme="bayer">
      <div className="min-h-screen bg-gray-50">
        <div className="text-center py-8 space-y-4">
          <h1 className={bayerSansClasses.heading.h1}>
            Bayer Sans + Element Themes
          </h1>
          <p className={bayerSansClasses.body.large}>
            Complete integration of Bayer Sans fonts and Element themes from CloudFront CDN
          </p>
        </div>
        
        <CloudFrontThemeDemo />
      </div>
    </CloudFrontThemeProvider>
  );
}

export default App;
