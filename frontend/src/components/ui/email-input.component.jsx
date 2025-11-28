import { IconMail } from "@tabler/icons-react";

export default function EmailInput() {
  return (
    <>
      <label className="input validator w-full">
        <IconMail size={20} className="opacity-50" />
        <input type="email" placeholder="mail@domain.com" required />
      </label>
      <div className="validator-hint hidden mt-0">Enter valid email address</div>
    </>
  );
}
