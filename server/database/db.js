import mongose from "mongose";

const connection = () => {
  const URL = "";
  try {
    mongose.connect(URL, {
      useNewUrlParser: true,
    });
  } catch (err) {
    console.log(`Error while connecting with the database`, err);
  }
};
