import Script from "next/script"

export default function GoogleAnalytics() {
  const GA_MEASUREMENT_ID_1 = "G-1H8YR5GV3W"
  const GA_MEASUREMENT_ID_2 = "G-QTKR61DYG5"

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID_1}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID_1}');
          gtag('config', '${GA_MEASUREMENT_ID_2}');
        `}
      </Script>
    </>
  )
}
