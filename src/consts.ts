// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { Header, Footer, About, Project } from "./types.ts";

import ProfilePic from "./assets/profile-pic.png";

import ZeroTrust from "./assets/projects/ZeroTrust.png";
import Kubernetes from "./assets/projects/Kubernetes.svg";
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
    "As a seasoned data engineer and analyst, from sculpting intricate data ecosystems to orchestrating seamless flows, my expertise lies in strengthening the foundations of digital realms. Together, we'll embark on an exhilarating journey to uncover the hidden gems within data universe, transforming its potential into unprecedented achievements.",
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
  resumeHref:
    "https://drive.google.com/file/d/14GWfYGp231M63bAWj7GQ4h60Icqw5r1S/view?usp=sharing",
  workExperience: [
    {
      title: "Head of Data Control Department",
      timeline: "2022 - Present",
      company: "Esuhai Group • Vietnam",
      description:
        "Led team in managing enterprise-wide data flows, focusing on DataOps/DevOps principles for integration, scalability, security, and compliance. Managed data synchronization and ETL/ELT pipelines using Kafka, Spark, and Airflow. Administered Bitrix24 CRM with workflow customization and API integration. Built executive reports with Power BI and Superset. Enhanced security with Vault, Keycloak SSO, and Coraza WAF. Implemented CI/CD pipelines and migrated apps to HA clusters with Docker/K8s.",
    },
    {
      title: "Database Administrator",
      timeline: "2017 - 2022",
      company: "IQVIA Inc • Vietnam",
      description:
        "Built and maintained drugstore universal data, ensuring accuracy and timeliness through data input from internal and external sources. Standardized data and deduplicated elements using fuzzy matching techniques. Supported building and transforming old data workflow to the new system. Performed quality assurance checks on exported systems for stakeholders. Developed quality control tools to empower end-users in managing and analyzing data. Monitored data visually to provide insights to stakeholders.",
    },
  ],
  education: [
    {
      title: "Bachelor of Computer Science",
      timeline: "2013 - 2017",
      institution: "University of Information Technology VNUHCM • Vietnam",
      description:
        "Researched and developed intelligent systems used in education and administration including intelligent problem solvers, automated knowledge queries, management systems, search semantic text documents, expert systems, decision support systems, and diagnostic systems. Researched and developed application systems used in computer vision and multimedia processing systems.",
    },
  ],
  // parses html
  getInTouch:
    "Drop me an email at <a href='mailto:ban.ndtran@gmail.com' class='primary-underline'>ban.ndtran@gmail.com</a> or connect with me on one of my socials.",
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
    techs: ["Vault", "Keycloak", "Coraza WAF", "APISIX"],
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
  }
];

// add blog articles in /src/content/blog
