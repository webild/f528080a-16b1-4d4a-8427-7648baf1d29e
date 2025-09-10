"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <NavbarLayoutFloatingOverlay
        navItems={[{ name: 'hero', id: 'hero' }, { name: 'about', id: 'about' }, { name: 'how-to-buy', id: 'how-to-buy' }, { name: 'tokenomics', id: 'tokenomics' }, { name: 'footer', id: 'footer' }]}
        logoSrc="/images/logo.svg"
        logoWidth={100}
        logoHeight={50}
        buttonText="Join Now"
        onButtonClick={() => { console.log('Button Clicked'); }}
      />

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SplitHero
          title="Welcome to My Site"
          subtitle="Discover engaging features and information!"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
          onPrimaryButtonClick={() => { console.log('Primary CTA clicked'); }}
          onSecondaryButtonClick={() => { console.log('Secondary CTA clicked'); }}
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout
          description="We are committed to providing top-notch services and products that cater to your needs."
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy"
          steps={[
            { title: 'Step 1', description: 'Research and choose your product.', image: '/images/placeholder1.avif', position: 'left', isCenter: false },
            { title: 'Step 2', description: 'Complete the purchase.', image: '/images/placeholder2.avif', position: 'right', isCenter: false },
            { title: 'Step 3', description: 'Enjoy your product!', image: '/images/placeholder3.avif', position: 'center', isCenter: true }
          ]}
        />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <TextGridTokenomics
          title="Tokenomics Overview"
          description="Discover the key aspects of our token structure and benefits."
          tokenData={[
            { value: '100M', description: 'Total Supply' },
            { value: '10%', description: 'Tax on Transactions' },
            { value: '5%', description: 'Liquidity Reserve' }
          ]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="MySite Logo"
          logoText="MySite"
          className="footer-class"
          logoClassName="footer-logo-class"
        />
      </div>
    </SiteThemeProvider>
  );
}