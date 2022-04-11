import {FormEvent, useState} from "react";
import {NextPage} from "next";
import {Button, CircularProgress, TextField} from '@mui/material';
import Footer from '../components/footer';
import Logo from "../components/logo";
import {ButtonComponent, SelfClosingComponent, ParentComponent} from "../components/code";
import {AnalyticView} from "./api/view";

const Analytics: NextPage = () => {
  const [analytics, setAnalytics] = useState<Array<AnalyticView> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const pass = formData.get('password');
    const response = await fetch('api/analytics', {
      method: 'POST',
      body: JSON.stringify({pass}),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const resData = await response.json();
    setLoading(false);
    if (resData.error) return setError(resData.error);
    setError(null);
    setAnalytics(resData as Array<AnalyticView>);
  };

  const getAnalytics = () => {
    if (!analytics) return 'Nope';
    if (analytics.length < 1) return <SelfClosingComponent name="Nothing" />;
    return analytics.map((siteInfo: AnalyticView) => {
      const {_id: id, views, path, hostname, lastVisited} = siteInfo;
      return (
        <SelfClosingComponent
          key={id}
          name="SiteViews"
          props={[
            {name: 'views', value: views},
            {name: 'from', value: hostname + ':' + path},
            {name: 'lastVisited', value: lastVisited},
          ]}
        />
      );
    })
  }

  const PasswordField = () => (
    <form className="flex flex-col items-center p-3 sm:p-6 lg:p-8" onSubmit={handleSubmit}>
      {loading && <CircularProgress className="mb-4" />}
      <TextField
        className="mb-4"
        id="password"
        name="password"
        type="password"
        label="password"
        disabled={loading}
        error={!!error}
        helperText={error ? error : ''}
        required
      />
      <Button className="w-full" type="submit" variant="contained" disabled={loading}>Get analytics</Button>
    </form>
  );

  const AnalyticsField = () => (
    <section className="p-3 sm:p-6 lg:p-8">
      <pre>
        <ParentComponent name="Analytics">
          {getAnalytics()}
        </ParentComponent>
        <ButtonComponent name="Close" onClick={() => setAnalytics(null)} />
      </pre>
    </section>
  );

  return (
    <div className="h-full flex flex-col items-center justify-between min-h-screen px-2 py-6 text-xs sm:p-8 sm:text-sm md:text-base lg:text-lg xl:text-xl">
      <Logo className="mx-auto" />
      <main className={`${analytics ? 'bg-code' : 'bg-form'} max-w-full rounded-md md:rounded-2xl mt-6 sm:mt-8`}>
        {analytics ? AnalyticsField() : PasswordField()}
      </main>
      <Footer />
    </div>
  );
};

export default Analytics;
