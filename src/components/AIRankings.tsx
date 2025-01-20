"use client"
import { useState } from 'react';

interface AIProject {
    id: string;
    name: string;
    url: string;
    monthly_visits: number;
    growth: number;
    growth_rate: number;
    description: string;
    tags: string[];
  }

export default function AIRankings() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;
  const aiTools = [
    {
      id: "1",
      name: "Shop: Your AI-Powered Shopping Assistant",
      url: "https://shop.app",
      monthly_visits: 142600000,
      growth: 17500000,
      growth_rate: 13.99,
      description: "AI-powered shopping assistant and mobile app for convenient and personalized online shopping.",
      tags: ["shopping assistant", "mobile app", "iOS", "Android", "exclusive rewards"]
    },
    {
      id: "2",
      name: "Perplexity AI",
      url: "https://perplexity.ai",
      monthly_visits: 93500000,
      growth: -9900000,
      growth_rate: -9.55,
      description: "An AI search engine utilizing large language models and search engines.",
      tags: ["AI search engine", "Natural language processing", "Language models"]
    },
    {
      id: "3",
      name: "Salesforce Einstein 1",
      url: "https://www.salesforce.com/products/einstein/overview/",
      monthly_visits: 74000000,
      growth: -4200000,
      growth_rate: -5.33,
      description: "A platform for efficient and collaborative software application development.",
      tags: ["application development", "AI", "CRM", "automation"]
    },
    {
      id: "4",
      name: "Anthropic",
      url: "https://www.anthropic.com",
      monthly_visits: 73800000,
      growth: -13800000,
      growth_rate: -15.70,
      description: "The AI assistant named Claude, called Anthropic, offers various capabilities and services.",
      tags: ["AI assistant", "Claude", "natural language processing", "machine learning"]
    },
    {
      id: "5",
      name: "HubSpot",
      url: "https://www.hubspot.com",
      monthly_visits: 32700000,
      growth: -3500000,
      growth_rate: -9.75,
      description: "Grow your business faster with HubSpot's customer platform.",
      tags: ["CRM", "Marketing Automation", "Sales CRM", "Customer Service"]
    },
    {
      id: "6",
      name: "Beacons",
      url: "https://beacons.ai",
      monthly_visits: 22000000,
      growth: 563800,
      growth_rate: 2.63,
      description: "AI-powered all-in-one platform for content creators.",
      tags: ["content creators", "AI-powered platform", "Link-in-Bio", "monetization"]
    },
    {
      id: "7",
      name: "Semantic Scholar",
      url: "https://www.semanticscholar.org",
      monthly_visits: 8100000,
      growth: -1300000,
      growth_rate: -13.73,
      description: "Semantic Scholar is a free AI research tool that helps scholars find relevant scientific literature.",
      tags: ["AI-powered research tool", "scientific literature", "AI", "engineering"]
    },
    {
      id: "8",
      name: "秘塔AI搜索",
      url: "https://metaso.cn",
      monthly_visits: 7700000,
      growth: 293300,
      growth_rate: 3.94,
      description: "没有广告，直达结果。",
      tags: ["搜索引擎", "无广告", "直达结果"]
    },
    {
      id: "9",
      name: "Luma AI",
      url: "https://lumalabs.ai",
      monthly_visits: 5600000,
      growth: -1100000,
      growth_rate: -16.29,
      description: "Luma AI enables lifelike 3D capture and photorealistic effects for everyone.",
      tags: ["3D", "AI", "Neural Rendering", "AR"]
    },
    {
      id: "10",
      name: "The Search Control",
      url: "https://searchcontrol.co",
      monthly_visits: 5500000,
      growth: -773400,
      growth_rate: -12.36,
      description: "Control your own search engine.",
      tags: ["search engine", "control", "customized search", "advanced filtering"]
    },
    {
        id: "11",
        name: "Replit",
        url: "https://replit.com",
        monthly_visits: 5200000,
        growth: -25500,
        growth_rate: -0.49,
        description: "Replit is a collaborative IDE with over 50 programming languages, providing a powerful compiler and interpreter.",
        tags: ["IDE", "programming", "collaboration", "development"]
      },
      {
        id: "12",
        name: "MailerLite",
        url: "https://www.mailerlite.com",
        monthly_visits: 4600000,
        growth: -168400,
        growth_rate: -3.53,
        description: "MailerLite is a platform providing tools for businesses to grow their audience and drive revenue.",
        tags: ["email marketing", "automation", "newsletter", "website builder"]
      },
      {
        id: "13",
        name: "iAsk.Ai",
        url: "https://iask.ai",
        monthly_visits: 4100000,
        growth: -58000,
        growth_rate: -1.41,
        description: "iAsk.Ai is a free AI search engine that provides instant and accurate answers without storing user data.",
        tags: ["AI search engine", "natural language processing", "instant answers"]
      },
      {
        id: "14",
        name: "v0.dev",
        url: "https://v0.dev",
        monthly_visits: 3700000,
        growth: 91100,
        growth_rate: 2.54,
        description: "Generative UI system powered by AI.",
        tags: ["generative user interface", "React code generation", "AI powered"]
      },
      {
        id: "15",
        name: "Consensus",
        url: "https://consensus.app",
        monthly_visits: 3300000,
        growth: -14700,
        growth_rate: -0.45,
        description: "Consensus uses AI to find insights in research papers.",
        tags: ["research", "AI", "academic papers", "insights"]
      },
      {
        id: "16",
        name: "Framer",
        url: "https://www.framer.com",
        monthly_visits: 3000000,
        growth: -244200,
        growth_rate: -7.51,
        description: "Framer allows users to create, design, and publish professional websites without coding.",
        tags: ["website design", "web development", "site builder", "animations"]
      },
      {
        id: "17",
        name: "Codeium",
        url: "https://codeium.com",
        monthly_visits: 2700000,
        growth: 763800,
        growth_rate: 38.96,
        description: "Codeium is a free AI tool for code completion and search, supporting 70+ languages.",
        tags: ["AI code completion", "IDE integration", "Code search", "Productivity tool"]
      },
      {
        id: "18",
        name: "Looka Logo Maker",
        url: "https://looka.com",
        monthly_visits: 2500000,
        growth: -299700,
        growth_rate: -10.56,
        description: "AI-powered logo maker that creates custom logos.",
        tags: ["logo design", "AI", "customizable", "branding"]
      },
      {
        id: "19",
        name: "Exa",
        url: "https://exa.ai",
        monthly_visits: 2500000,
        growth: 2300000,
        growth_rate: 1102.71,
        description: "Web API that enriches AI applications with real-time data.",
        tags: ["Web API", "AI enhancement", "Semantic search", "Real-time data"]
      },
      {
        id: "20",
        name: "GPT Engineer",
        url: "https://gptengineer.app",
        monthly_visits: 2500000,
        growth: 2000000,
        growth_rate: 460.82,
        description: "AI tool for building and deploying web apps through conversation.",
        tags: ["AI software engineer", "Web app development", "Development collaboration"]
      },
      {
        id: "21",
        name: "MyShell AI",
        url: "https://myshell.ai",
        monthly_visits: 2400000,
        growth: -269500,
        growth_rate: -10.20,
        description: "Create personalized chatbots with MyShell platform, powered by AI and Web3.",
        tags: ["AI-powered", "Web3", "chatbot platform", "personalized chatbots"]
      },
      {
        id: "22",
        name: "Felo",
        url: "https://felo.ai",
        monthly_visits: 2100000,
        growth: 111200,
        growth_rate: 5.49,
        description: "Multilingual AI search engine for global knowledge",
        tags: ["Multilingual search engine", "AI-powered search", "Global information"]
      },
      {
        id: "23",
        name: "Fillout.com",
        url: "https://fillout.com",
        monthly_visits: 2100000,
        growth: -132800,
        growth_rate: -6.01,
        description: "Fillout is a customizable tool for creating forms and collecting responses.",
        tags: ["form builder", "survey tool", "data collection", "e-signatures"]
      },
      {
        id: "24",
        name: "Socratic",
        url: "https://socratic.org",
        monthly_visits: 2000000,
        growth: -639500,
        growth_rate: -24.42,
        description: "Socratic is a learning platform that provides answers, explanations, and videos to help students learn better.",
        tags: ["learning platform", "homework help", "study resources", "Google AI"]
      },
      {
        id: "25",
        name: "Cursor",
        url: "https://cursor.sh",
        monthly_visits: 1900000,
        growth: 481100,
        growth_rate: 33.68,
        description: "The AI-first Code Editor for fast software development.",
        tags: ["AI", "code editor", "pair-programming"]
      },
      {
        id: "26",
        name: "Replicate AI",
        url: "https://replicate.com",
        monthly_visits: 1900000,
        growth: 158500,
        growth_rate: 9.07,
        description: "Execute AI models via API.",
        tags: ["AI", "Machine Learning", "API", "Cloud Computing"]
      },
      {
        id: "27",
        name: "UPDF AI",
        url: "https://updf.com",
        monthly_visits: 1700000,
        growth: -260400,
        growth_rate: -13.27,
        description: "UPDF AI is a GPT-powered assistant integrated into the UPDF app, an all-in-one PDF editor.",
        tags: ["AI PDF editor", "AI image chatter", "AI mind map"]
      },
      {
        id: "28",
        name: "Angular.dev",
        url: "https://angular.dev",
        monthly_visits: 1700000,
        growth: 30100,
        growth_rate: 1.85,
        description: "Web development framework for modern apps.",
        tags: ["web development", "framework", "modern apps", "accessibility"]
      },
      {
        id: "29",
        name: "Weights & Biases",
        url: "https://wandb.ai",
        monthly_visits: 1500000,
        growth: -245700,
        growth_rate: -13.91,
        description: "A platform for machine learning developers to track, visualize, and optimize experiments.",
        tags: ["developer tools", "machine learning", "experiment tracking", "model visualization"]
      },
      {
        id: "30",
        name: "Query Search",
        url: "https://query.ai",
        monthly_visits: 1300000,
        growth: -348900,
        growth_rate: -20.98,
        description: "Find development solutions using natural language.",
        tags: ["development", "programming", "search engine", "natural language"]
      },
      {
        id: "31",
        name: "LogoAI",
        url: "https://logo.ai",
        monthly_visits: 1300000,
        growth: -277600,
        growth_rate: -17.65,
        description: "LogoAI is an AI-powered platform that assists businesses in creating professional logos and promoting brands.",
        tags: ["logo design", "AI", "branding", "business"]
      },
      {
        id: "32",
        name: "Stability AI",
        url: "https://stability.ai",
        monthly_visits: 1200000,
        growth: -2500,
        growth_rate: -0.21,
        description: "Stability AI activates human potential by building an AI foundation for and by the people.",
        tags: ["AI platform", "Stable Diffusion", "image recognition", "natural language processing"]
      },
      {
        id: "33",
        name: "AskYourPDF",
        url: "https://askyourpdf.com",
        monthly_visits: 1200000,
        growth: -135700,
        growth_rate: -10.49,
        description: "AI chat app AskYourPDF extracts insights from uploaded PDF documents.",
        tags: ["PDF AI", "document analysis", "chat app", "intelligent assistant"]
      },
      {
        id: "34",
        name: "WebX",
        url: "https://webx.ai",
        monthly_visits: 1100000,
        growth: -181900,
        growth_rate: -13.90,
        description: "AI website builder that creates sites from keywords or voice commands.",
        tags: ["AI website builder", "No coding required", "SEO optimization"]
      },
      {
        id: "35",
        name: "Apify",
        url: "https://apify.com",
        monthly_visits: 1100000,
        growth: 126300,
        growth_rate: 13.04,
        description: "Comprehensive platform for web scraping and automation tools.",
        tags: ["Web scraping", "Data extraction", "Browser automation", "APIs"]
      },
      {
        id: "36",
        name: "Algolia",
        url: "https://www.algolia.com",
        monthly_visits: 1100000,
        growth: -84800,
        growth_rate: -7.29,
        description: "Algolia is an AI-powered platform for fast and relevant search experiences.",
        tags: ["AI search", "discovery", "search API", "personalization"]
      },
      {
        id: "37",
        name: "Namelix",
        url: "https://namelix.com",
        monthly_visits: 1000000,
        growth: -260900,
        growth_rate: -20.10,
        description: "Namelix is a free AI tool that generates short, brandable business names.",
        tags: ["business name generator", "AI-powered", "brandable names", "domain availability"]
      },
      {
        id: "38",
        name: "Coze",
        url: "https://coze.com",
        monthly_visits: 997700,
        growth: 26800,
        growth_rate: 2.76,
        description: "An AI chat bot development platform with LLMs.",
        tags: ["AI chat bots", "LLM", "application development", "plugins"]
      },
      {
        id: "39",
        name: "Roboflow",
        url: "https://roboflow.com",
        monthly_visits: 983000,
        growth: -120000,
        growth_rate: -10.88,
        description: "Give your software the power to see objects in images and video.",
        tags: ["computer vision", "image recognition", "machine learning", "deep learning"]
      },
      {
        id: "40",
        name: "Appy Pie",
        url: "https://www.appypie.com",
        monthly_visits: 973900,
        growth: -160000,
        growth_rate: -14.11,
        description: "Codeless app development with AI.",
        tags: ["no code", "app development", "website development", "AI"]
      },
      {
        id: "41",
        name: "10Web",
        url: "https://10web.io",
        monthly_visits: 973600,
        growth: -80500,
        growth_rate: -7.64,
        description: "10Web is an AI-powered website management platform with tools for hosting, building, optimizing, and securing websites.",
        tags: ["website management", "AI website builder", "hosting", "optimization"]
      },
      {
        id: "42",
        name: "KaneAI",
        url: "https://kane.ai",
        monthly_visits: 938300,
        growth: -125600,
        growth_rate: -11.81,
        description: "KaneAI by LambdaTest is a smart AI-powered test agent for high speed Quality Engineering teams.",
        tags: ["testing", "end to end testing", "test authoring", "auto heal test"]
      },
      {
        id: "43",
        name: "Glean",
        url: "https://glean.com",
        monthly_visits: 924100,
        growth: -85900,
        growth_rate: -8.50,
        description: "Glean is a search solution for teams to find information and important knowledge.",
        tags: ["enterprise search", "knowledge discovery", "AI-powered search", "workplace search"]
      },
      {
        id: "44",
        name: "Dify",
        url: "https://dify.ai",
        monthly_visits: 884100,
        growth: 18400,
        growth_rate: 2.13,
        description: "Dify empowers users to create sustainable applications effortlessly.",
        tags: ["LLMOps", "AI-native", "applications", "GPT-4"]
      },
      {
        id: "45",
        name: "TubeBuddy",
        url: "https://www.tubebuddy.com",
        monthly_visits: 876000,
        growth: 35700,
        growth_rate: 4.25,
        description: "YouTube workflow optimization software for creators",
        tags: ["YouTube tools", "content creation", "channel management", "SEO optimization"]
      },
      {
        id: "46",
        name: "Warp",
        url: "https://warp.dev",
        monthly_visits: 874600,
        growth: 203800,
        growth_rate: 30.39,
        description: "Warp is a modern terminal with AI to accelerate software development.",
        tags: ["terminal", "Rust", "AI", "software development"]
      },
      {
        id: "47",
        name: "Robly Email Marketing",
        url: "https://www.robly.com",
        monthly_visits: 829600,
        growth: 152800,
        growth_rate: 22.58,
        description: "Leading innovator in Small Business Marketing Automation.",
        tags: ["Email Marketing", "Marketing Automation", "RoblyAI", "Small Business"]
      },
      {
        id: "48",
        name: "Uizard",
        url: "https://uizard.io",
        monthly_visits: 823500,
        growth: -73900,
        growth_rate: -8.24,
        description: "Design apps and websites quickly with Uizard, the first AI-powered design tool!",
        tags: ["AI-powered design tool", "UX/UI design", "Mobile app design", "Website design"]
      },
      {
        id: "49",
        name: "GitBook",
        url: "https://www.gitbook.com",
        monthly_visits: 794300,
        growth: 36200,
        growth_rate: 4.78,
        description: "A knowledge management tool for technical teams.",
        tags: ["knowledge management", "technical teams", "docs-as-code", "AI-powered search"]
      },
      {
        id: "50",
        name: "Portaly",
        url: "https://portaly.cc",
        monthly_visits: 790200,
        growth: -187100,
        growth_rate: -19.14,
        description: "Portaly is an AI platform for easy customization and creation of personalized link-in-bio landing pages.",
        tags: ["link in bio", "AI", "landing page", "customizable"]
      },
      {
        id: "51",
        name: "Resemble AI",
        url: "https://www.resemble.ai",
        monthly_visits: 784100,
        growth: 76100,
        growth_rate: 10.75,
        description: "Generate synthetic voices that resemble real humans in seconds.",
        tags: ["AI Voice Generator", "Text-to-Speech", "Voice Cloning", "Neural Audio Editing"]
      },
      {
        id: "52",
        name: "ActiveCampaign AI",
        url: "https://www.activecampaign.com",
        monthly_visits: 781100,
        growth: -89700,
        growth_rate: -10.30,
        description: "Marketing automation with predictive AI",
        tags: ["Marketing Automation", "Email Marketing", "Sales CRM", "SMS Marketing"]
      },
      {
        id: "53",
        name: "Glide",
        url: "https://www.glideapps.com",
        monthly_visits: 776400,
        growth: 31600,
        growth_rate: 4.25,
        description: "AI-powered custom apps without code.",
        tags: ["no-code app builder", "AI-powered apps", "business software", "data visualization"]
      },
      {
        id: "54",
        name: "Brandmark Logo Maker",
        url: "https://brandmark.io",
        monthly_visits: 712400,
        growth: -204600,
        growth_rate: -22.31,
        description: "Create unique logos and graphics with Brandmark Logo Maker's advanced AI design tool.",
        tags: ["logo design", "AI", "branding", "generative AI"]
      },
      {
        id: "55",
        name: "Durable",
        url: "https://durable.co",
        monthly_visits: 711400,
        growth: -27600,
        growth_rate: -3.73,
        description: "A platform that offers AI tools for small businesses to create and manage their websites efficiently.",
        tags: ["AI website builder", "small business software", "CRM", "invoicing"]
      },
      {
        id: "56",
        name: "Logomaster.ai",
        url: "https://logomaster.ai",
        monthly_visits: 698400,
        growth: -104400,
        growth_rate: -13.00,
        description: "Create professional logos easily with Logomaster.ai's intuitive interface and AI-powered suggestions in 5 minutes.",
        tags: ["logo design", "AI", "branding", "design"]
      },
      {
        id: "57",
        name: "Nanonets",
        url: "https://nanonets.com",
        monthly_visits: 644900,
        growth: 35300,
        growth_rate: 5.78,
        description: "Nanonets is an AI platform that automates processes and extracts actionable insights from unstructured data.",
        tags: ["Intelligent Automation", "AI", "OCR", "Document Processing"]
      },
      {
        id: "58",
        name: "Coddy",
        url: "https://coddy.ai",
        monthly_visits: 644800,
        growth: 185600,
        growth_rate: 40.41,
        description: "Immersive, hands-on learning, seamlessly integrated into daily routine.",
        tags: ["Code", "Learning", "Practice", "Coding"]
      },
      {
        id: "59",
        name: "B12",
        url: "https://www.b12.io",
        monthly_visits: 635000,
        growth: 61400,
        growth_rate: 10.71,
        description: "AI-powered website builder for professional service providers.",
        tags: ["AI-powered", "website builder", "professional services", "business operations"]
      },
      {
        id: "60",
        name: "AssemblyAI",
        url: "https://www.assemblyai.com",
        monthly_visits: 629700,
        growth: 13900,
        growth_rate: 2.26,
        description: "AssemblyAI provides AI models for transcribing and understanding speech through a user-friendly API.",
        tags: ["AI models", "speech transcription", "speech understanding", "audio intelligence"]
      },
      {
        id: "61",
        name: "Mermaid Chart",
        url: "https://mermaid.live",
        monthly_visits: 605300,
        growth: 47600,
        growth_rate: 8.54,
        description: "Collaborative diagramming platform using AI for visual diagrams.",
        tags: ["diagramming", "collaboration", "visualizations", "code documentation"]
      },
      {
        id: "62",
        name: "Vana",
        url: "https://vana.com",
        monthly_visits: 602500,
        growth: 580400,
        growth_rate: 2619.07,
        description: "Create a personalized AI mini 'you' for different app experiences.",
        tags: ["personalization", "AI", "digital identity", "privacy"]
      },
      {
        id: "63",
        name: "Andi",
        url: "https://andisearch.com",
        monthly_visits: 599800,
        growth: -99900,
        growth_rate: -14.27,
        description: "Andi is a website that uses AI to provide direct answers to queries.",
        tags: ["AI search", "generative AI", "conversational search", "chat-like interface"]
      },
      {
        id: "64",
        name: "Cody",
        url: "https://cody.ai",
        monthly_visits: 591100,
        growth: 85900,
        growth_rate: 17.01,
        description: "AI coding assistant for writing and fixing code.",
        tags: ["AI coding assistant", "Code generation", "Unit testing", "IDE integration"]
      },
      {
        id: "65",
        name: "HARPA AI",
        url: "https://harpa.ai",
        monthly_visits: 587800,
        growth: -47400,
        growth_rate: -7.46,
        description: "HARPA AI: Chrome extension for web automation and AI-powered tasks.",
        tags: ["AI-powered web automation", "Chrome extension", "ChatGPT", "Google Search"]
      },
      {
        id: "66",
        name: "Softr",
        url: "https://www.softr.io",
        monthly_visits: 585300,
        growth: -87000,
        growth_rate: -12.94,
        description: "Build client portals and internal tools without coding using Softr's pre-built blocks.",
        tags: ["client portals", "internal tools", "no code", "templates"]
      },
      {
        id: "67",
        name: "PhantomBuster",
        url: "https://phantombuster.com",
        monthly_visits: 570900,
        growth: -77700,
        growth_rate: -11.99,
        description: "PhantomBuster is a web-based platform for data extraction and analysis from online sources.",
        tags: ["data extraction", "automation", "web scraping", "API"]
      },
      {
        id: "68",
        name: "Mobirise AI",
        url: "https://mobirise.com",
        monthly_visits: 569200,
        growth: -82300,
        growth_rate: -12.63,
        description: "Automated website creation with AI",
        tags: ["AI Website Generator", "Website creation", "Automated design", "No-code website builder"]
      },
      {
        id: "69",
        name: "Unbounce",
        url: "https://unbounce.com",
        monthly_visits: 549500,
        growth: -24700,
        growth_rate: -4.29,
        description: "Unbounce is an AI-powered platform that helps businesses create and optimize landing pages.",
        tags: ["landing page builder", "AI insights", "lead generation", "sales optimization"]
      },
      {
        id: "70",
        name: "Relume",
        url: "https://www.relume.io",
        monthly_visits: 529300,
        growth: 49000,
        growth_rate: 10.20,
        description: "Helping web designers win with no-code and generative AI.",
        tags: ["web design", "no-code", "generative AI", "Figma"]
      },
      {
        id: "71",
        name: "Raycast",
        url: "https://www.raycast.com",
        monthly_visits: 516700,
        growth: -44000,
        growth_rate: -7.85,
        description: "A fast, customizable launcher that helps you stay focused by controlling your tools efficiently.",
        tags: ["productivity", "launcher", "AI-powered chat", "Mac"]
      },
      {
        id: "72",
        name: "Senuto",
        url: "https://senuto.com",
        monthly_visits: 511100,
        growth: 67400,
        growth_rate: 15.20,
        description: "Boost website traffic and outrun competition on Google with Senuto.",
        tags: ["SEO", "web traffic", "keyword research", "Google ranking"]
      },
      {
        id: "73",
        name: "STUDIO AI",
        url: "https://studio.ai",
        monthly_visits: 507600,
        growth: 3600,
        growth_rate: 0.71,
        description: "A cutting-edge web design tool with intelligent technology that transforms designs into live websites.",
        tags: ["web design", "AI", "design tool", "code generation"]
      },
      {
        id: "74",
        name: "Pinecone",
        url: "https://www.pinecone.io",
        monthly_visits: 507300,
        growth: 41300,
        growth_rate: 8.86,
        description: "Pinecone is a fast vector database for searching similar items in milliseconds.",
        tags: ["vector database", "AI applications", "API", "millisecond search"]
      },
      {
        id: "75",
        name: "Dora",
        url: "https://dora.run",
        monthly_visits: 501000,
        growth: 21700,
        growth_rate: 4.54,
        description: "Dora is a no-code platform for designers to create 3D websites without coding.",
        tags: ["3D web design", "no code", "website builder", "animation"]
      },
      {
        id: "76",
        name: "Globe Explorer",
        url: "https://explorer.globe.engineer",
        monthly_visits: 497100,
        growth: -722300,
        growth_rate: -59.23,
        description: "Explore topics and provide feedback on Globe Explorer",
        tags: ["Topic exploration", "Research resources", "Feedback platform"]
      },
      {
        id: "77",
        name: "Chaindesk",
        url: "https://chaindesk.ai",
        monthly_visits: 496300,
        growth: 34700,
        growth_rate: 7.52,
        description: "Create custom AI chatbots with Chaindesk for streamlined customer support.",
        tags: ["AI chatbot", "Customer support", "Slack AI chatbot"]
      },
      {
        id: "78",
        name: "Visily",
        url: "https://www.visily.ai",
        monthly_visits: 481500,
        growth: -54400,
        growth_rate: -10.16,
        description: "Visily simplifies the design process with AI-powered wireframing.",
        tags: ["wireframe tool", "AI-powered", "design", "prototyping"]
      },
      {
        id: "79",
        name: "TheB.AI",
        url: "https://theb.ai",
        monthly_visits: 478800,
        growth: -110300,
        growth_rate: -18.73,
        description: "Access cutting-edge language and image models through an easy-to-use interface or unified API.",
        tags: ["AI platform", "language models", "image models", "API"]
      },
      {
        id: "80",
        name: "Tabnine",
        url: "https://www.tabnine.com",
        monthly_visits: 466000,
        growth: -47100,
        growth_rate: -9.17,
        description: "Tabnine is an AI assistant that improves code delivery and safety for better development productivity.",
        tags: ["AI assistant", "code completion", "development productivity"]
      },
      {
        id: "81",
        name: "ChainGPT",
        url: "https://chaingpt.org",
        monthly_visits: 461200,
        growth: -100100,
        growth_rate: -17.83,
        description: "ChainGPT combines blockchain and AI to provide solutions for the crypto and blockchain community.",
        tags: ["Blockchain", "AI", "Crypto", "Smart contracts"]
      },
      {
        id: "82",
        name: "VWO",
        url: "https://vwo.com",
        monthly_visits: 458800,
        growth: -99400,
        growth_rate: -17.80,
        description: "Market-leading A/B testing tool, helping companies optimize conversions and accelerate growth.",
        tags: ["A/B testing", "Conversion optimization", "Analytics"]
      },
      {
        id: "83",
        name: "Cartoon Yourself",
        url: "https://cartoonyourself.com",
        monthly_visits: 457000,
        growth: 18000,
        growth_rate: 4.09,
        description: "Turn your photos into cartoons with ease.",
        tags: ["photo to cartoon", "AI image editing", "photo effects"]
      },
      {
        id: "84",
        name: "Pieces for Developers",
        url: "https://pieces.app",
        monthly_visits: 449200,
        growth: 204100,
        growth_rate: 83.29,
        description: "AI-powered code snippet manager and workflow tool for developers.",
        tags: ["AI", "Code Snippet Manager", "Developer Tool"]
      },
      {
        id: "85",
        name: "Jina AI",
        url: "https://jina.ai",
        monthly_visits: 448600,
        growth: -11700,
        growth_rate: -2.54,
        description: "Democratizing AI for all.",
        tags: ["multimodal AI", "democratize access", "innovation"]
      },
      {
        id: "86",
        name: "Lightning AI",
        url: "https://lightning.ai",
        monthly_visits: 441100,
        growth: 16700,
        growth_rate: 3.92,
        description: "Lightning AI allows fast AI model training and deployment using PyTorch.",
        tags: ["AI platform", "PyTorch", "model training"]
      },
      {
        id: "87",
        name: "Jam",
        url: "https://jam.dev",
        monthly_visits: 438900,
        growth: -73100,
        growth_rate: -14.28,
        description: "Jam is an efficient bug reporting tool that simplifies the process for users.",
        tags: ["bug reporting", "bug tracking", "productivity"]
      },
      {
        id: "88",
        name: "Chatfuel",
        url: "https://chatfuel.com",
        monthly_visits: 429200,
        growth: -4100,
        growth_rate: -0.95,
        description: "Chatfuel is an official WhatsApp API partner, offering a messaging platform for business communication.",
        tags: ["WhatsApp API", "customer support", "business messaging"]
      },
      {
        id: "89",
        name: "ScoreApp",
        url: "https://scoreapp.com",
        monthly_visits: 420900,
        growth: -120900,
        growth_rate: -22.32,
        description: "Attract leads, gain insights, increase sales.",
        tags: ["quiz funnel marketing", "lead generation", "AI Quiz Builder"]
      },
      {
        id: "90",
        name: "Flim",
        url: "https://flim.ai",
        monthly_visits: 417900,
        growth: 151400,
        growth_rate: 56.82,
        description: "Find perfect images for creative ideas.",
        tags: ["image search", "AI", "creative tools"]
      },
      {
        id: "91",
        name: "Ready Player Me",
        url: "https://readyplayer.me",
        monthly_visits: 412800,
        growth: 74000,
        growth_rate: 21.85,
        description: "Ready Player Me is a trusted developer tool for personalized avatars in games and apps.",
        tags: ["avatars", "game development", "app development"]
      },
      {
        id: "92",
        name: "Akkio",
        url: "https://www.akkio.com",
        monthly_visits: 401800,
        growth: 56800,
        growth_rate: 16.47,
        description: "Akkio is a user-friendly platform for data analysis and AI integration.",
        tags: ["AI platform", "data analysis", "machine learning"]
      },
      {
        id: "93",
        name: "TypingMind",
        url: "https://www.typingmind.com",
        monthly_visits: 392600,
        growth: 39800,
        growth_rate: 11.29,
        description: "TypingMind improves ChatGPT's UI with added features.",
        tags: ["chatbot", "user interface", "enhanced features"]
      },
      {
        id: "94",
        name: "Landbot AI",
        url: "https://landbot.io",
        monthly_visits: 390900,
        growth: -22700,
        growth_rate: -5.49,
        description: "Landbot is a versatile chatbot builder that requires no coding knowledge.",
        tags: ["chatbot builder", "no-code", "customer support"]
      },
      {
        id: "95",
        name: "TrueGether",
        url: "https://www.truegether.com",
        monthly_visits: 371900,
        growth: -31800,
        growth_rate: -7.87,
        description: "No fee platform to increase e-commerce sales.",
        tags: ["e-commerce", "marketplace", "online selling"]
      },
      {
        id: "96",
        name: "GPT Engineer",
        url: "https://gptengineer.app",
        monthly_visits: 368500,
        growth: 185100,
        growth_rate: 100.93,
        description: "Build web apps with English, rapid and easy prototyping.",
        tags: ["web apps", "prototyping", "natural language"]
      },
      {
        id: "97",
        name: "Dorik AI",
        url: "https://dorik.com",
        monthly_visits: 365200,
        growth: 116700,
        growth_rate: 46.96,
        description: "AI-driven website builder for creating stunning websites effortlessly.",
        tags: ["Website builder", "AI tools", "SEO features"]
      },
      {
        id: "98",
        name: "Zarla AI",
        url: "https://www.zarla.com",
        monthly_visits: 360200,
        growth: -82300,
        growth_rate: -18.59,
        description: "Build your website in seconds",
        tags: ["Website builder", "AI-powered", "Fast website"]
      },
      {
        id: "99",
        name: "Octoparse",
        url: "https://www.octoparse.com",
        monthly_visits: 347200,
        growth: -28600,
        growth_rate: -7.60,
        description: "No-code web scraping tool for collecting website data.",
        tags: ["web scraping", "data extraction", "no-code"]
      },
      {
        id: "100",
        name: "Wegic",
        url: "https://wegic.ai",
        monthly_visits: 342900,
        growth: 38900,
        growth_rate: 12.82,
        description: "AI web designer & developer with GPT-4o model.",
        tags: ["AI Web Designer", "AI Web Developer", "Web Development"]
      }
  ];
  
  const [projects] = useState<AIProject[]>(aiTools);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = projects.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  return (
    <div className="bg-[#0d1117] text-white min-h-screen p-4">
      <table className="w-full">
        <thead>
          <tr className="text-gray-400 border-b border-gray-800">
            <th className="text-left p-4">Ranking</th>
            <th className="text-left p-4">Tools</th>
            <th className="text-right p-4">Monthly Visit</th>
            <th className="text-right p-4">Growth</th>
            <th className="text-right p-4">Growth Rate</th>
            <th className="text-left p-4">Tags</th>
          </tr>
        </thead>
        <tbody>
          {currentProjects.map((tool, index) => (
            <tr key={tool.id} className="border-b border-gray-800 hover:bg-[#1a1f2b]">
              <td className="p-4 flex items-center gap-3">
                <span className="text-gray-400">{indexOfFirstItem + index + 1}</span>
              </td>
              <td className="p-4">
                {tool.url ? (
                  <a 
                    href={tool.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-400 hover:text-blue-300"
                  >
                    {tool.name}
                  </a>
                ) : (
                  <span>{tool.name}</span>
                )}
              </td>
              <td className="text-right p-4">
                {(tool.monthly_visits / 1000000).toFixed(1)}M
              </td>
              <td className="text-right p-4">
                <span className={`${tool.growth > 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {tool.growth >= 1000000 ? `${(tool.growth / 1000000).toFixed(1)}M` : 
                  tool.growth >= 1000 ? `${(tool.growth / 1000).toFixed(1)}K` : 
                  tool.growth}
                </span>
              </td>
              <td className="text-right p-4">
                <span className={`${tool.growth_rate > 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {tool.growth_rate > 0 ? '+' : ''}{tool.growth_rate.toFixed(2)}%
                </span>
              </td>
              <td className="p-4">
                <div className="flex flex-wrap gap-2">
                  {tool.tags.slice(0, 3).map((tag, i) => (
                    <span 
                      key={i} 
                      className="bg-[#1a1f2b] px-2 py-1 rounded text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1 ? 'bg-[#6e3a9d]' : 'bg-[#1a1f2b]'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}