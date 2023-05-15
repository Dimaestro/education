import Counter from "components/Counter/Counter";
import Dropdown from 'components/Dropdown/Dropdown';

export const App = () => {
  return (
    <div>
      <Counter initialValue={10} />
      <Dropdown />
    </div>
  );
};
