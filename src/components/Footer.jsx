import Contacts from "./Contacts";
import Logotype from "./ui/Logotype";
import RequestFrom from "./RequestFrom";

const Footer = () => {
  return (
    <footer
      className="custom-box rounded-bl-none rounded-br-none pb-6 mt-10"
      id="footer"
    >
      <div className="container flex gap-4 justify-between lg:flex-row flex-col">
        <div className="flex flex-col gap-4">
          <Logotype />
          <Contacts />
        </div>
        <div className="flex flex-col gap-4">
          <RequestFrom />
          <p className="text-title">
            &copy; {new Date().getFullYear()}. Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
