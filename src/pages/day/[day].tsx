import type { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import Menu from "../../components/Menu";
import Render from "../../components/Render";

const DayPage: NextPage<{ day: string }> = ({ day }) => {
  return (
    <>
      <Head>
        <title>Day {day}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <div className="grid w-4/5 grid-cols-6 gap-4">
            <div>
              <Menu />
            </div>
            <div className="col-span-5">
              <Render day={day} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DayPage;

export const getServerSideProps = ({ params }: GetServerSidePropsContext) => {
  return { props: params };
};
