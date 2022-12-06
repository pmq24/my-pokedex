import '../styles/app.css';
import TypeList from '../app/components/type-list';

export default {
  title: 'TypeList',
  component: TypeList,
};

export function Example() {
  return <TypeList types={['ice', 'bug']} />;
}
