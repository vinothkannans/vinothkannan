export async function generateMetadata() {
  return {
    title: { default: "Logs - Vinoth Kannan", template: "%s - Logs - Vinoth Kannan" },
    description: "Logs of various things I track",
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  )
}