import { createClient } from "@/prismicio";
import NavBar from "@/components/Navigation";

const client = createClient();
const Header = async () => {
  const settings = await client.getSingle("settings");
  return <NavBar settings={settings} />;
};

export default Header;
