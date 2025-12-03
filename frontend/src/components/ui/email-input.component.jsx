import { IconMail } from "@tabler/icons-react";

export default function EmailInput(props) {
  return (
    <>
      <label className="input w-full">
        <IconMail size={20} className="opacity-50" />
        <input type="email" placeholder="mail@domain.com" required {...props} />
      </label>
    </>
  );
}
