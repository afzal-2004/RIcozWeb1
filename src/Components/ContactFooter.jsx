import FOOTERFORM from "./FooterForm";
//  THIS IS FOOTER SECTION OF THE WEB PAGE
const ContactFooter = () => {
  return (
    <>
      <div className=" bg-card-color  h-[90vh]">
        <div className=" mt-14 flex mb-0">
          <div className="">
            <img
              src="https://s3-alpha-sig.figma.com/img/fd72/c931/139b63064f2777c33bccf36b4057a928?Expires=1702857600&Signature=LrlEH1RIe2YynuD5BkcN9rjkK30gbCUSKOEsRIJCEauw72x9nA5kCXYPSGvfFL4Js87mB7OcymAAu2g7qkFuUGu4o4mz1fDJ1tEbww9iIkQiGqugAlhnSdTL3OinfpkVqdJx4z8mqS2QUV~3JUBK8Z7xvq2YYnajCqDgzn-GwW~4AzSrLh~KvzAZluoU0a4IicmsNWu-F7dzMHBlcx4Lz3KgNv6SyDU1~CV5r1pyUemjIYpsrzwCNfOvSXIwWVKcRflQwfuyCFSyP1lBD4LW3QZnxLsGDllQIs9ZogADrYDpjwzkVNYDFXRiUF4hIgYlOgVdyX-lRows0ILOEw-PIw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              width={490}
              alt=""
              className=" rounded-full float-left  ml-12 mr-7 mt-5 custom-shaped-image  other"
            />
          </div>
          <div className="  FORM w-full  mt-6 ml-24 ">
            <FOOTERFORM></FOOTERFORM>
          </div>
        </div>
        <hr className=" mt-5" />
        <footer className=" text-white p-8 mt-3  ">
          <div className="flex justify-around">
            <div className="text-center">
              <img
                src="https://cdn0.rubylane.com/shops/teesantiqueorchard/16400.1L.jpg"
                alt="Telephone Icon"
                className="w-10 h-10 mx-auto mb-2 rounded-full bg-white p-1"
              />
              <a href="#">Phone: +91-555-123-4567</a>
            </div>
            <div className="text-center">
              <img
                src="https://th.bing.com/th/id/OIP.A_QLZ7Y9nBwaWnkhCbvGmQHaHZ?rs=1&pid=ImgDetMain"
                alt="Instagram Icon"
                className="w-10 h-10 mx-auto mb-2 rounded-full bg-white p-1"
              />
              <a href="#">Ricoz.in</a>
            </div>
            <div className="text-center">
              <img
                src="https://th.bing.com/th/id/OIP.N3cFVgAShuhUnvU-yBB12AHaEK?rs=1&pid=ImgDetMain"
                alt="Gmail Icon"
                className="w-10 h-10 mx-auto mb-2 rounded-full bg-white p-1"
              />
              <a href="#">info@gmail.com</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
export default ContactFooter;
