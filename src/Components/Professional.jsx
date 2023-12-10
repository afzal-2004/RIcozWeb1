import ProfessionalCard from "./ProfesCard";

const Professional = () => {
  const professional = [
    {
      name: ` "  I am recommed this to  All"`,
      position: "John Doe",
      company: "Graduate",
      story:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam minima, impedit fuga quis delectus voluptates porro ex vero? Ad sit veniam dolor in, itaque nobis voluptates perspiciatis optio illo labore.",
      image:
        "https://s3-alpha-sig.figma.com/img/2f4e/5f9f/3e89abdae1eba086585a4623040f3445?Expires=1702857600&Signature=HEPhqWNlk8p7w9cKzg7nmXAYgDKfTIMjpBMqRGmlCNv~4qC3gFJbIUWUm~F-NS--Eb92PZF0k7zalDurCZd36aUp4eO9tfBomFhsto37xu2NqO4ufT1yCTAFK6Um55GmeQWyunpAOzkXeN3kVGRbXMJ16pIuyvQp~QXkETQQxThogKTX9XrwG9SzfOB49D7JfJZZ9M3zrFSVKKec~AUxSOBTKMWF5oP9c83xXnYywHmI9Avf7FLRBX3EdW6HClHlt8HbwsM-ovmeQiMryQ33KeTlLQyj~iRBr8p0oXqYEm9ZJMGfRRVVZ88gRDwpbh4COePeLEfSUZVePY4E5ZciNg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      name: ` " A Game Changer For US  "`,
      position: "Shophia Milter",
      company: "Student ",
      story:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam minima, impedit fuga quis delectus voluptates porro ex vero? Ad sit veniam dolor in, itaque nobis voluptates perspiciatis optio illo labore.",
      image:
        "https://s3-alpha-sig.figma.com/img/53b1/7344/3adf3004213af880011b0ef55b8c4683?Expires=1702857600&Signature=EV5E8vA9q7QixV2QhKMpVbcLk2xvDU0yxJNnR0AqxfEkunqXeshHDsCdbvP4Luyygvefz0vygiOqY527IP3h8qOFewgQ8l9JpEmymgQoWRhrbvmHl~Wd8HDql3FUc~TQFUxcqYj10ghH0GI88h22zRyxmvHm9ZT-adJuB1a0XyTjq5LcD2u0cCg1zR13DTie7ZyZa23Qz9S9AX-iBCyzGBrbt0D6aUl8LRsKDqigPTCHq4vl7fhyfIypTrch-lO5n6s2zZyjRxwVEkV7l7FH6HeazdACZ51uK8mhsJDGcaivxAYLoU3O1N3in9oWRXjmKYDy0b4uLpJpLRDClPKr7A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      name: ` " the support is Awesome "`,
      position: "Alice Smith ",
      company: "UI/UX designer ",
      story:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam minima, impedit fuga quis delectus voluptates porro ex vero? Ad sit veniam dolor in, itaque nobis voluptates perspiciatis optio illo labore.",
      image:
        "https://s3-alpha-sig.figma.com/img/9d86/2d8e/ef0e80edf14409c3aa8d4f69e845f736?Expires=1702857600&Signature=ezwSgcYmElAFIous5OGWjnoYcXVrwJJJ6NcroKvCRuGSgPTwrNn8ocXAeWIK4N8f29YRiuK5KvfBehCIlFwxfKxF106g4nIoDyMcP2~v~hx5kwBWaN90kQaWxZkGk1TR2z-igJnHjgdo3DpDTgwG-xq4Al9eMCXjSD7zVr3FlJO1x7RFqcj690MGDbHLW9pVy8G--yQGJe5zSDER3DOUxPzmqOKprT6h25nGvppHAw2s2SHZfs4OTsjcGRYwOotF4ytj2XrBMoIXpK3wtOLdNnhULlrjj8gjxM-sDhZXvHXdy4zGJIkuVuRQvj-f-Kbv53Ff1mWV0XkgUJJCkrZpIg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
  ];

  return (
    <div className=" bg-black  mt-11 text-white  h-[60vh]">
      <h1 className="   pt-12 text-center text-3xl">
        Real Stories From Real Professionals
      </h1>
      <div className=" flex ml-11 mr-8 mt-5">
        {professional.map((professional, index) => (
          <ProfessionalCard key={index} professional={professional} />
        ))}
      </div>
    </div>
  );
};
export default Professional;
