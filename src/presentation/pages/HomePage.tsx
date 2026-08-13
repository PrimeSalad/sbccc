import { AppPromo } from '../components/AppPromo';
import { CarePath } from '../components/CarePath';
import { ConversationStarters } from '../components/ConversationStarters';
import { DailyCheckIn } from '../components/DailyCheckIn';
import { Faq } from '../components/Faq';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { SupportDirectory } from '../components/SupportDirectory';
import { VideoStory } from '../components/VideoStory';

export function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <DailyCheckIn />
        <CarePath />
        <VideoStory />
        <SupportDirectory />
        <ConversationStarters />
        <AppPromo />
        <Faq />
      </main>
      <Footer />
      <a className="mobile-support-pill" href="tel:1553">
        Need to talk? <strong>Call 1553</strong>
      </a>
    </>
  );
}
