// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { Header, Footer, About, Project } from "./types.ts";

import ProfilePic from "./assets/profile-pic.png";

import ZeroTrust from "./assets/projects/ZeroTrust.png";
import Kubernetes from "./assets/projects/Kubernetes.svg";
import AvifLogo from "./assets/projects/Avif-logo-rgb.svg";
import MSSQLIcon from "./assets/icons/mssql.svg";
import BytebaseIcon from "./assets/icons/bytebase.svg";
import LinkedinIcon from "./assets/icons/linkedin.svg";
import AzureIcon from "./assets/icons/Azure.svg";
import FabricIcon from "./assets/icons/fabric.svg";
import LokiIcon from "./assets/icons/loki.svg";
import ApisixIcon from "./assets/icons/apisix.svg";
import LonghornIcon from "./assets/icons/longhorn.svg";
import MaterializeIcon from "./assets/icons/materialize.svg";

export const SITE_URL: string = "http://localhost:4321";

export const meta = {
  about: {
    // index page
    title: "Ban Tran",
    description:
      "Hi, I'm Ban Tran, a Computer Scientist and DataOps-Sec / Full Stack Developer. Welcome to my little corner of the internet!",
  },
  projects: {
    title: "Projects | Ban Tran",
    description:
      "Here are some of my projects — things I’ve built, experimented with, and had fun creating.",
  },
  blog: {
    title: "Blog | Ban Tran",
    description:
      "This is my blog — a place where I share thoughts, ideas, and things I’m learning along the way.",
  },
  // blog post title and description are taken from the variables in markdown file
};

export const header: Header = { logoTitle: "B" };

export const footer: Footer = {
  // parses html
  content:
    // "Made with ❤️ by Ban Tran • <a href='https://github.com/bantnd/vercel-portfolio' class='link'>Source Code</a>",
    "Made with ❤️ by Ban Tran",
};

export const about: About = {
  // parses html
  headLine: "Hi, I'm <span class='fancy-highlight'>Ban Tran</span>",
  tagLine: "DataOps-Sec / Full Stack Developer",
  profilePic: ProfilePic,
  // parses html
  description:
    "I'm a Computer Scientist and DataOps-Sec specialist with a passion for building robust, scalable data infrastructure. Currently leading data control initiatives at Esuhai Group, I architect enterprise-grade solutions using **Kafka**, **Spark**, and **Kubernetes**. My expertise spans the full data lifecycle—from orchestrating complex ETL pipelines and securing data flows with **Vault** and **Keycloak**, to delivering actionable insights via **Power BI**. I bridge the gap between Data Engineering, Security, and DevOps to turn raw data into strategic assets.",
  links: [
    {
      icon: "Github",
      iconUrl: "https://cdn.simpleicons.org/github",
      href: "https://github.com/bantnd"
    },
    {
      icon: "Linkedin",
      iconUrl: LinkedinIcon.src,
      href: "https://www.linkedin.com/in/ban-tran/"
    },
    {
      icon: "Telegram",
      iconUrl: "https://cdn.simpleicons.org/telegram",
      href: "https://t.me/B_TND"
    },
    {
      icon: "Signal",
      iconUrl: "https://cdn.simpleicons.org/signal",
      href: "https://signal.me/#eu/UaFB41yCNAhrkK5IrSXMuF07MK_EKwHQ7tHn4-eAGgPFxtCaSfxM_5RpgfVh49Yw"
    },
    {
      icon: "Zalo",
      iconUrl: "https://cdn.simpleicons.org/zalo",
      href: "https://zaloapp.com/qr/p/1i7p9az54et7r"
    },
    {
      icon: "Mail",
      iconUrl: "https://cdn.simpleicons.org/gmail",
      href: "mailto:ban.ndtran@gmail.com"
    },
  ],
  workExperience: [
    {
      title: "Head of Data Control Department",
      timeline: "2022 - Present",
      company: "Esuhai Group • Vietnam",
      description: [
        "Led **9-member team** managing enterprise-wide data flows with focus on DataOps/DevOps principles for integration, scalability, security, and compliance",
        "Architected data synchronization and ETL/ELT pipelines using **Kafka**, **Spark**, and **Airflow**, processing **10M+ events daily**",
        "Administered **Bitrix24 CRM** with custom workflow automation and API integrations serving **500+ users**",
        "Built executive dashboards with **Power BI** and **Superset** delivering real-time KPIs to leadership",
        "Enhanced security posture implementing **Vault** for secrets management, **Keycloak SSO** for authentication, and **Coraza WAF** for API protection",
        "Migrated standalone applications to HA Kubernetes clusters with complete CI/CD pipelines",
      ],
    },
    {
      title: "Database Administrator",
      timeline: "2017 - 2022",
      company: "IQVIA Inc • Vietnam",
      description: [
        "Built and maintained drugstore universal data ensuring accuracy and timeliness from **internal and external sources**",
        "Standardized and deduplicated **100K+ records** using fuzzy matching techniques with **95%+ accuracy**",
        "Supported migration of legacy data workflow to new system, reducing processing time by **40%**",
        "Performed quality assurance checks on exported systems for stakeholders across **10+ departments**",
        "Developed quality control tools empowering end-users to manage and analyze data independently",
        "Created data visualization dashboards providing insights to stakeholders",
      ],
    },
  ],
  education: [
    {
      title: "Bachelor of Computer Science",
      timeline: "2013 - 2017",
      institution: "University of Information Technology VNUHCM • Vietnam",
      description: [
        "Researched and developed intelligent systems used in education and administration including intelligent problem solvers, automated knowledge queries, management systems, search semantic text documents, expert systems, decision support systems, and diagnostic systems.",
        "Researched and developed application systems used in computer vision and multimedia processing systems.",
      ],
    },
  ],
  // parses html
  getInTouch:
    "Have a project in mind or just want to chat? I'm always open to discussing new ideas and opportunities. Feel free to reach out directly or connect with me on social media.",
  techStack: {
    databases: [
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
      { name: "Microsoft SQL Server", icon: MSSQLIcon.src },
      { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase" },
      { name: "Clickhouse", icon: "https://cdn.simpleicons.org/clickhouse" },
      { name: "CockroachDB", icon: "https://cdn.simpleicons.org/cockroachlabs" },
      { name: "Doris", icon: "https://cdn.simpleicons.org/apachedoris" },
      { name: "OpenSearch", icon: "https://cdn.simpleicons.org/opensearch" },
      { name: "Elasticsearch", icon: "https://cdn.simpleicons.org/elasticsearch" },
      { name: "Redis", icon: "https://cdn.simpleicons.org/redis" },
      { name: "DuckDB", icon: "https://cdn.simpleicons.org/duckdb" },
      { name: "Apache Spark", icon: "https://cdn.simpleicons.org/apachespark" },
      { name: "Trino", icon: "https://cdn.simpleicons.org/trino" },
      { name: "Materialize", icon: MaterializeIcon.src },
      { name: "Hive", icon: "https://cdn.simpleicons.org/apachehive" },
      { name: "Apache Flink", icon: "https://cdn.simpleicons.org/apacheflink" },
    ],
    languages: [
      { name: "Python", icon: "https://cdn.simpleicons.org/python" },
      { name: "Go", icon: "https://cdn.simpleicons.org/go" },
      { name: "Javascript", icon: "https://cdn.simpleicons.org/javascript" },
      { name: "PHP", icon: "https://cdn.simpleicons.org/php" },
      { name: "Bash", icon: "https://cdn.simpleicons.org/gnubash" },
      { name: "Lua", icon: "https://cdn.simpleicons.org/lua" },
      { name: "HCL", icon: "https://cdn.simpleicons.org/hashicorp" },
    ],
    tools: [
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
      { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes" },
      { name: "Apisix", icon: ApisixIcon.src },
      { name: "Azure", icon: AzureIcon.src },
      { name: "Fabric", icon: FabricIcon.src },
      { name: "ArgoCD", icon: "https://cdn.simpleicons.org/argo" },
      { name: "Apache Kafka", icon: "https://cdn.simpleicons.org/apachekafka" },
      { name: "Apache Airflow", icon: "https://cdn.simpleicons.org/apacheairflow" },
      { name: "N8n", icon: "https://cdn.simpleicons.org/n8n" },
      { name: "Keycloak", icon: "https://cdn.simpleicons.org/keycloak" },
      { name: "Hashicorp Vault", icon: "https://cdn.simpleicons.org/vault" },
      { name: "Metabase", icon: "https://cdn.simpleicons.org/metabase" },
      { name: "Grafana", icon: "https://cdn.simpleicons.org/grafana" },
      { name: "Prometheus", icon: "https://cdn.simpleicons.org/prometheus" },
      { name: "Loki", icon: LokiIcon.src },
      { name: "Fluentbit", icon: "https://cdn.simpleicons.org/fluentbit" },
      { name: "Bytebase", icon: BytebaseIcon.src },
      { name: "Airbyte", icon: "https://cdn.simpleicons.org/airbyte" },
      { name: "Apache Superset", icon: "https://cdn.simpleicons.org/apachesuperset" },
      { name: "Kong", icon: "https://cdn.simpleicons.org/kong" },
      { name: "Cilium", icon: "https://cdn.simpleicons.org/cilium" },
      { name: "Jenkins", icon: "https://cdn.simpleicons.org/jenkins" },
      { name: "Longhorn", icon: LonghornIcon.src },
      { name: "MinIO", icon: "https://cdn.simpleicons.org/minio" },
      { name: "Harbor", icon: "https://cdn.simpleicons.org/harbor" },
      { name: "OpenProject", icon: "https://cdn.simpleicons.org/openproject" },
    ],
  },
};

export const projects: Project[] = [
  {
    logoImage: "https://cdn.simpleicons.org/apachekafka",
    title: "Real-time Data Synchronization Platform",
    techs: ["Kafka", "Debezium", "Confluent", "Go"],
    description:
      "Built enterprise-scale data synchronization system handling millions of events daily. Implemented CDC pipelines with Kafka and stream processing for real-time data transformations.",
    sourceHref: "",
    liveHref: "/projects/realtime-data-sync",
  },
  {
    logoImage: ZeroTrust,
    title: "Zero-Trust Security Infrastructure",
    techs: ["Vault", "Keycloak", "APISIX", "Coraza WAF"],
    description:
      "Designed and implemented enterprise security architecture with centralized secrets management, SSO/OpenID authentication, and API gateway with WAF protection.",
    sourceHref: "",
    liveHref: "",
  },
  {
    logoImage: Kubernetes,
    title: "High-Availability Kubernetes Platform",
    techs: ["Kubernetes", "Docker", "ArgoCD", "Prometheus"],
    description:
      "Migrated legacy applications to HA Kubernetes clusters. Implemented complete CI/CD pipelines, monitoring stack, and automated deployment workflows.",
    sourceHref: "",
    liveHref: "",
  },
  {
    logoImage: AvifLogo,
    title: "AVIF Image Converter",
    techs: ["Go", "Libvips", "AVIF"],
    description:
      "A project aimed at reducing our company's storage usage by converting existing images into the AVIF format. We have built an API that efficiently converts images to AVIF, enabling smaller file sizes while maintaining image quality. This helps optimize storage costs and improve delivery performance.",
    sourceHref: "",
    liveHref: "/projects/image-converter",
  },
];

// add blog articles in /src/content/blog
