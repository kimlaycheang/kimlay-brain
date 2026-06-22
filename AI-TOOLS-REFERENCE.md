# AI Tools Reference — Kim's Arsenal
> Read this when Kim asks "what do I have" or "how do I use X"
> Last updated: 2026-06-22

## Claude Code — Built-in Commands
| Command | ใช้เมื่อไหร่ | ตัวอย่างจริง |
|---------|------------|-------------|
| /fork | ทำงานใหญ่ใน background ขณะคุยต่อ | /fork fix Hermes bots then test Telegram |
| /batch | งานขนาน 4 ธุรกิจพร้อมกัน | /batch create weekly content all 4 businesses |
| /schedule | cron อัตโนมัติ ไม่ต้องเปิด PC | /schedule every 9am summarize and send Telegram |
| /agents | ดู/จัดการ agent ที่รันอยู่ | /agents |
| /remote-env | ตั้ง cloud environment ก่อนใช้ /schedule | /remote-env |
| /claude-api | ดู model ID, pricing, params | /claude-api |
| /compact | บีบ history ประหยัด context | พิมพ์เมื่อ context ใกล้เต็ม |

## Claude Code — Skills (ใช้อัตโนมัติจาก CLAUDE.md)
| Trigger | Skill |
|---------|-------|
| งาน Pratunam/hotel | anthropic-skills:pratunam-content |
| งาน BT Express | anthropic-skills:bt-express-content |
| งาน Cambodia Logistics | anthropic-skills:cambodia-logistics |
| งาน TravelBusAsia | anthropic-skills:travelbusasia-content |
| สร้าง MCP server | anthropic-skills:mcp-builder |
| รวม memory/vault | anthropic-skills:consolidate-memory |
| สร้าง Word/PDF/Excel/PPT | docx / pdf / xlsx / pptx skill |

## Claude Code — Connectors (pre-approved ใน settings.json)
| Connector | ใช้เมื่อ |
|-----------|---------|
| Supabase MCP | ดึงข้อมูล hotel, bookings, shipments |
| Windsor.ai MCP | Facebook Ads data ทุก 4 ธุรกิจ |
| Google Drive MCP | เปิด/บันทึก Google Docs/Sheets |
| Gmail MCP | อ่าน/ส่ง email |
| Canva MCP | สร้าง design จาก Claude Code |

## Hermes Workers — Telegram Routing
| Command | ไปที่ | โมเดล | ค่าใช้จ่าย |
|---------|------|-------|-----------|
| /w1 [task] | @Hermes_Nay_bot | DeepSeek V4-Flash | $0.09/1M |
| /w2 [task] | @Claude_kimlay_bot | Qwen 3 Coder | $0 ฟรี |
| ESCALATE (Qwen ตอบ) | ส่งซ้ำด้วย /w1 | DeepSeek | - |

## Hermes Workers — File Locations
| File | Path |
|------|------|
| worker-primary config | C:\Users\kimla\AppData\Local\hermes\profiles\worker-primary\ |
| worker-free config | C:\Users\kimla\AppData\Local\hermes\profiles\worker-free\ |
| CORE-CONTEXT | E:\Obsidian+claude\my vault\CORE-CONTEXT.md |
| CLAUDE.md (auto-load) | E:\Obsidian+claude\my vault\CLAUDE.md |
| PROGRESS.md | E:\Obsidian+claude\my vault\PROGRESS.md |
| PLAN.md | E:\Obsidian+claude\my vault\PLAN.md |
| DECISIONS.md | E:\Obsidian+claude\my vault\DECISIONS.md |
| kimlay-brain GitHub | https://github.com/kimlaycheang/kimlay-brain |
| VPS mirror | /opt/obsidian-vault/ (72.62.196.38) |

## VPS PM2 Processes (72.62.196.38)
| ID | Name | หน้าที่ |
|----|------|---------|
| 0 | thlog-sync | Thai log sync |
| 4 | guru-sync | Guru PMS sync FM2 |
| 5 | zuzu-sync | Zuzu PMS sync FM1 |
| 6 | hermes-agent | Hermes VPS (diagnosis-only) |
| 7 | video-editor-bot | วิดีโอ |
| 9 | repurpose-bot | repurpose content |
| 10 | kosal-vdo-bot | Kosal video |
| 11 | kimlay-team-bot | Kim team |
| 12 | kim-orchestrator | orchestrator |

## OpenRouter Keys
| Key name | ใช้กับ | หมายเหตุ |
|----------|-------|---------|
| Hermes | worker-primary + worker-free | paid account |
| Boss | (disabled — boss คือ Claude terminal) | เก็บไว้ |
| contentos | เก่า ไม่ใช้ | ลบได้ |

## When to use what
- **คุย/วางแผน** → Claude chat (นี่) หรือ Claude Code terminal
- **งาน background** → /fork ใน Claude Code
- **งานขนาน 4 ธุรกิจ** → /batch ใน Claude Code  
- **งาน scheduled/อัตโนมัติ** → /schedule ใน Claude Code
- **งาน coding/complex** → /w1 ใน Telegram
- **งานง่าย/draft** → /w2 ใน Telegram
- **ข้อมูล hotel จริง** → Supabase MCP
- **ข้อมูล Facebook Ads** → Windsor.ai MCP
