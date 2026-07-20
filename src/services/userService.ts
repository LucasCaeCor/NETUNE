// src/services/userService.ts
export function test(res: any) {
  res.json({ ok: true }); // ❌ regra quebra
}