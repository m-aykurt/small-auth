import React, { useEffect, useState } from "react";
import { useCallApi } from "../../../service";
import Character from "../../character";

const ListBody = () => {
  const { getPeople } = useCallApi();
  const [people, setPeople] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    const getPersonList = async () => {
      try {
        const data = await getPeople();
        setPeople(data);
      } catch (err) {
        setError(err);
      }
    };
    getPersonList();
  }, []);

  // if (error) {
  //   return <div>Bir hata oluştu</div>;
  // }
  return (
    <div className="cols">
      <h1>murat</h1>
      {people?.results?.length > 0 &&
        people?.results?.map((item) => (
          <div>
            <div className="col-3">
              <Character item={item} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default ListBody;
