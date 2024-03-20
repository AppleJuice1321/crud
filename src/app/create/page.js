import Input from "@/components/input";

export default async function Create() {

    return (
      <form>
        <h2>Add a list of a person to your Hit List</h2>
        <Input label="Name" name="name" type="text"></Input>
        <Input label="Age" name="age" type="text"></Input>
        <button>Add to Hit List</button>
      </form>
    );
  }
  