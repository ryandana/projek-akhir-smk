import { IconKey } from "@tabler/icons-react";

export default function PasswordInput(props) {
  return (
    <>
      <label className="input w-full">
        <IconKey className="opacity-50" size={20} />
        <input
          type="password"
          required
          placeholder="Password"
          minLength="8"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
          {...props}
        />
      </label>
    </>
  );
}
