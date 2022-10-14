import { useRouter } from "next/router";

import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Meet Near Me"
          description="Find events and meet people IRL"
        />
      }
    >
      <h1 className="text-2xl font-bold">Next.js with Preact</h1>
      <img
        src={`${router.basePath}/assets/images/banner-placeholder.png`}
        alt="Banner placeholder"
      />
    </Main>
  );
};

export default Index;
