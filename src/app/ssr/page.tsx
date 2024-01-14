import { Suspense } from "react";

import C from "./C";

export default async function Page() {
  return (
    <Suspense
      fallback={
        <div>
          loading
          <div>CARREGANDO</div>
        </div>
      }>
      <C />
    </Suspense>
  );
}
