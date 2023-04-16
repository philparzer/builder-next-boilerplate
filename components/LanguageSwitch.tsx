import { useRouter } from 'next/router';

export default function LanguageSwitch () {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  const handleLanguageChange = (locale: string) => {
    router.push({ pathname, query }, asPath, { locale });
  };

  return (
    <>
      <select
        onChange={(e) => handleLanguageChange(e.target.value)}
        defaultValue={locale}
      >
        <option value="en">English</option>
        <option value="de">Deutsch</option>
      </select>
    </>
  );
}