import 'tailwindcss/tailwind.css'
import { AnimateSharedLayout } from "framer-motion"

import { useEffect } from 'react'
import { useRouter } from 'next/router'

import analytics from "../util/firebase/analytics"
import { logEvent } from "firebase/analytics"

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      // Initialize Firebase Analytics
      const logEventHandler = () => {
        logEvent(analytics(), "screen_view");
      };

      router.events.on('routeChangeComplete', logEventHandler);
      logEventHandler(window.location.pathname); // Logs first page that the user visits

      console.log("Made with 🧋");

      // Remvove the event listener for firebase Analytics after unmount
      return () => {
        router.events.off('routeChangeComplete', logEventHandler);
      };
    }
  }, [router.events]);

  return (
    <AnimateSharedLayout>
      <Component {...pageProps} />
    </AnimateSharedLayout>
  )
}

export default MyApp
