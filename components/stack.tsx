import { SiCss, SiCssHex, SiDiscourse, SiDiscourseHex, SiDocker, SiDockerHex, SiFirebase, SiFirebaseHex, SiHtml5, SiHtml5Hex, SiJavascript, SiJavascriptHex, SiKotlin, SiKotlinHex, SiKubernetes, SiKubernetesHex, SiLaravel, SiLaravelHex, SiMysql, SiMysqlHex, SiNextdotjs, SiNextdotjsHex, SiNodedotjs, SiNodedotjsHex, SiPhp, SiPhpHex, SiPostgresql, SiPostgresqlHex, SiReact, SiReactHex, SiRedis, SiRedisHex, SiRuby, SiRubyHex, SiRubyonrails, SiRubyonrailsHex, SiShadcnui, SiShadcnuiHex, SiStripe, SiStripeHex, SiSwift, SiSwiftHex, SiTailwindcss, SiTailwindcssHex, SiTypescript, SiTypescriptHex, SiWordpress, SiWordpressHex } from "@icons-pack/react-simple-icons";

export default function Stack() {
  const stack = [
    { name: "Discourse", icon: SiDiscourse, color: SiDiscourseHex, className: "bg-white" },
    { name: "Ruby on Rails", icon: SiRubyonrails, color: SiRubyonrailsHex },
    { name: "Laravel", icon: SiLaravel, color: SiLaravelHex },
    { name: "Next.js", icon: SiNextdotjs, color: SiNextdotjsHex, className: "bg-white" },
    { name: "Ruby", icon: SiRuby, color: SiRubyHex },
    { name: "React", icon: SiReact, color: SiReactHex },
    { name: "Swift", icon: SiSwift, color: SiSwiftHex },
    { name: "Kotlin", icon: SiKotlin, color: SiKotlinHex },
    { name: "PostgreSQL", icon: SiPostgresql, color: SiPostgresqlHex },
    { name: "MySQL", icon: SiMysql, color: SiMysqlHex },
    { name: "Firebase", icon: SiFirebase, color: SiFirebaseHex },
    { name: "Kubernetes", icon: SiKubernetes, color: SiKubernetesHex },
    { name: "Docker", icon: SiDocker, color: SiDockerHex },
    { name: "PHP", icon: SiPhp, color: SiPhpHex },
    { name: "Node.js", icon: SiNodedotjs, color: SiNodedotjsHex },
    { name: "TypeScript", icon: SiTypescript, color: SiTypescriptHex },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: SiTailwindcssHex },
    { name: "shadcn/ui", icon: SiShadcnui, color: SiShadcnuiHex, className: "bg-white" },
    { name: "Redis", icon: SiRedis, color: SiRedisHex },
    { name: "WordPress", icon: SiWordpress, color: SiWordpressHex },
    { name: "JavaScript", icon: SiJavascript, color: SiJavascriptHex, iconClassName: "bg-black" },
    { name: "Stripe", icon: SiStripe, color: SiStripeHex },
    { name: "HTML5", icon: SiHtml5, color: SiHtml5Hex },
    { name: "CSS", icon: SiCss, color: SiCssHex },
  ]
  return (
    <div className="flex flex-wrap gap-1">
      {stack.map((item) => (
        <div key={item.name} className={`p-1.5 rounded-md ${item.className}`}>
          <item.icon className={`h-6 w-6 ${item.iconClassName}`} style={{ fill: item.color }} />
        </div>
      ))}
    </div>
  )
}