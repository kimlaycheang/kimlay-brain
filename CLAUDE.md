# Claude Code — Auto Rules for Kim's AI Team

## Context (load automatically)
- Always read CORE-CONTEXT.md first (same folder)
- Read PROGRESS.md for current task status
- git pull before any file edit

## Token Discipline
- /compact automatically when context > 80% full
- Load skills only when task matches — do not load all
- Read only files relevant to current task

## Auto-Skill Triggers (use without being asked)
- File creation (docx/pdf/pptx/xlsx) → load matching skill
- Hotel/Pratunam task → anthropic-skills:pratunam-content
- BT Express task → anthropic-skills:bt-express-content
- Cambodia Logistics task → anthropic-skills:cambodia-logistics
- TravelBusAsia task → anthropic-skills:travelbusasia-content
- MCP server needed → anthropic-skills:mcp-builder
- Memory consolidation → anthropic-skills:consolidate-memory

## Auto-Connector Triggers (use without being asked)
- Hotel data/bookings → Supabase MCP
- Facebook Ads data → Windsor.ai MCP
- Google docs/sheets → Google Drive MCP
- Email tasks → Gmail MCP

## After Every Task (mandatory)
- Append to PROGRESS.md (max 3 lines)
- Update PLAN.md if phase changed
- git add + commit + push
- Commit message: "progress: [task name]"

## Worker Routing
- /w1 [task] → DeepSeek (complex/coding)
- /w2 [task] → Qwen (simple/repeat, free)
- If Qwen replies ESCALATE → rerun with /w1

## Hard Rules
- Never SSH into VPS 72.62.196.38 directly
- Never push without showing diff first
- Never put API keys in any committed file
- n8n: use only if no better option exists (MCP → Claude Code → script → n8n, in that order)

## Meta-Rules — Long-term Intelligence

### Auto-Skill Creation
When working on any task, if Claude notices:
- A repeated pattern (same task done 3+ times)
- A missing skill that would save tokens next time
- A connector that would replace manual steps
→ STOP and tell Kim:
  "I notice we need a skill for [X].
   Want me to create it now? It will save [Y] tokens
   per use going forward."
Use /skill-creator to build it after Kim approves.

### Tool/Connector Recommendation
Before starting any task, check:
- Can a connector (Supabase/Windsor/Gmail/Drive)
  get this data faster than manual input?
- Is there a skill that already does this?
- Would an MCP server make this permanent?
If yes → tell Kim before proceeding, not after.

### Mistake Analysis (ongoing)
After every session, note in PROGRESS.md:
- What took longer than expected and why
- What tool/skill was missing
- What should be automated next time
Format: [INSIGHT] [WHAT] → [RECOMMENDED FIX]

### n8n Policy (corrected)
n8n is NOT permanently banned.
Rule: use n8n ONLY when no better option exists.
Better options (prefer in this order):
1. Native MCP connector
2. Claude Code direct
3. Hermes worker skill
4. Custom Python/Node script
5. n8n (last resort)
Always tell Kim which option you chose and why.

### Technology Choice Principle
ALWAYS choose for long-term over short-term:
- Short-term: faster to build now, harder to maintain
- Long-term: takes longer now, saves time every use
If forced to choose short-term → flag it explicitly:
"This is a short-term fix. Long-term solution is [X].
 Should I build the proper version now or later?"

## Sync to Claude Chat (Boss)
After every significant task or daily end:
Run: cat PROGRESS.md | tail -20
Copy output and paste to Claude chat
so Boss (Claude) stays updated without
reading full git history.

Or use session-report skill:
/session-report → auto-summarizes what was done
paste summary to Claude chat.
