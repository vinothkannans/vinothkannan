import { SiAndroidstudio, SiAndroidstudioHex, SiApache, SiApacheHex, SiCss, SiCssHex, SiDiscourse, SiDiscourseHex, SiDocker, SiDockerHex, SiEmberdotjs, SiEmberdotjsHex, SiFigma, SiFigmaHex, SiFirebase, SiFirebaseHex, SiGit, SiGitHex, SiGoogleads, SiGoogleadsHex, SiGooglecloud, SiGooglecloudHex, SiGooglemaps, SiGooglemapsHex, SiHtml5, SiHtml5Hex, SiHuggingface, SiHuggingfaceHex, SiJavascript, SiJavascriptHex, SiKotlin, SiKotlinHex, SiKubernetes, SiKubernetesHex, SiLaravel, SiLaravelHex, SiMysql, SiMysqlHex, SiNextdotjs, SiNextdotjsHex, SiNginx, SiNginxHex, SiNodedotjs, SiNodedotjsHex, SiPhotopea, SiPhotopeaHex, SiPhp, SiPhpHex, SiPostgresql, SiPostgresqlHex, SiReact, SiReactHex, SiRedis, SiRedisHex, SiRevenuecat, SiRevenuecatHex, SiRuby, SiRubyHex, SiRubyonrails, SiRubyonrailsHex, SiShadcnui, SiShadcnuiHex, SiShopify, SiShopifyHex, SiStripe, SiStripeHex, SiSwift, SiSwiftHex, SiTailwindcss, SiTailwindcssHex, SiTypescript, SiTypescriptHex, SiWordpress, SiWordpressHex, SiXcode, SiXcodeHex } from "@icons-pack/react-simple-icons";

export default function Stack() {
  const stack = [
    { name: "Discourse", icon: SiDiscourse, color: SiDiscourseHex, className: "dark:fill-white!" },
    { name: "Ruby on Rails", icon: SiRubyonrails, color: SiRubyonrailsHex },
    { name: "Laravel", icon: SiLaravel, color: SiLaravelHex },
    { name: "Next.js", icon: SiNextdotjs, color: SiNextdotjsHex, className: "dark:fill-white!" },
    { name: "Ruby", icon: SiRuby, color: SiRubyHex },
    { name: "React", icon: SiReact, color: SiReactHex },
    { name: "Swift", icon: SiSwift, color: SiSwiftHex },
    { name: "Kotlin", icon: SiKotlin, color: SiKotlinHex },
    { name: "PostgreSQL", icon: SiPostgresql, color: SiPostgresqlHex },
    { name: "MySQL", icon: SiMysql, color: SiMysqlHex },
    { name: "Firebase", icon: SiFirebase, color: SiFirebaseHex },
    { name: "Kubernetes", icon: SiKubernetes, color: SiKubernetesHex },
    { name: "Docker", icon: SiDocker, color: SiDockerHex },
    { name: "Google Cloud", icon: SiGooglecloud, color: SiGooglecloudHex },
    { name: "PHP", icon: SiPhp, color: SiPhpHex },
    { name: "Ember.js", icon: SiEmberdotjs, color: SiEmberdotjsHex },
    { name: "Node.js", icon: SiNodedotjs, color: SiNodedotjsHex },
    { name: "TypeScript", icon: SiTypescript, color: SiTypescriptHex },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: SiTailwindcssHex },
    { name: "shadcn/ui", icon: SiShadcnui, color: SiShadcnuiHex, className: "dark:fill-white!" },
    { name: "Redis", icon: SiRedis, color: SiRedisHex },
    { name: "WordPress", icon: SiWordpress, color: SiWordpressHex },
    { name: "JavaScript", icon: SiJavascript, color: SiJavascriptHex, className: "bg-black" },
    { name: "Stripe", icon: SiStripe, color: SiStripeHex },
    { name: "Shopify", icon: SiShopify, color: SiShopifyHex },
    { name: "HTML5", icon: SiHtml5, color: SiHtml5Hex },
    { name: "CSS", icon: SiCss, color: SiCssHex },
    { name: "Git", icon: SiGit, color: SiGitHex },
    { name: "Google Ads", icon: SiGoogleads, color: SiGoogleadsHex },
    { name: "Nginx", icon: SiNginx, color: SiNginxHex },
    { name: "Apache", icon: SiApache, color: SiApacheHex },
    { name: "Xcode", icon: SiXcode, color: SiXcodeHex },
    { name: "Android Studio", icon: SiAndroidstudio, color: SiAndroidstudioHex },
    { name: "Hugging Face", icon: SiHuggingface, color: SiHuggingfaceHex },
    { name: "Figma", icon: SiFigma, color: SiFigmaHex },
    { name: "Photopea", icon: SiPhotopea, color: SiPhotopeaHex },
    { name: "Google Maps", icon: SiGooglemaps, color: SiGooglemapsHex },
    { name: "RevenueCat", icon: SiRevenuecat, color: SiRevenuecatHex },
  ]
  return (
    <div className="flex flex-wrap gap-1">
      {stack.map((item) => (
        <div key={item.name} className={`p-1.5 rounded-md`}>
          <item.icon className={`h-6 w-6 ${item.className}`} style={{ fill: item.color }} />
        </div>
      ))}
    </div>
  )
}