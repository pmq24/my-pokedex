import TextField from 'app/components/text-field';
import PageTitle from '../../components/page-title';
import { FcGoogle } from 'react-icons/fc';

export default function Login() {
  return (
    <>
      <PageTitle title="Login" />

      <div className="flex flex-col place-content-stretch gap-2">
        <button className="btn btn-outline btn-sm">
          <FcGoogle className="m-2" />
          Login with Google
        </button>
        <div className="divider">or</div>
        <TextField label="Email" />
        <TextField label="Password" type="password" />
        <button className="btn">Log in</button>
      </div>
    </>
  );
}
