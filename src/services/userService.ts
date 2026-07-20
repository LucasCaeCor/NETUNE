export function test(res: any) {
  res.json({ ok: true }); // ❌ deveria quebrar regra
}