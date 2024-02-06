import { useSelector } from "react-redux";


const Field = () => {
  const fieldAction = [   
    {
      location: 1,
      name: "Получи 1 000",
    },
    {
      location: 2,
      name: "Заплати 100 000",
    },
    {
      location: 3,
      name: "Получи 10 000",
    },
    {
      location: 4,
      name: "Заплати 5 000 000",
    },
    {
      location: 5,
      name: "Получи 400 000",
    },
    {
      location: 6,
      name: "Заплати 10 000 000",
    }   
  ]
  const count = useSelector((state) => state.counter.value)


  return (
    <div className="field">
      {fieldAction.map((item) => (
        <div className={item.location=== count ? "field__action active" : "field__action"}
         key={item.location}
         >
          <h3>{item.name}</h3>
          <h4>{item.location}</h4>
          </div>
      )
      )}
    </div>
  );
}

export default Field;