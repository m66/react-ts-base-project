import { ComponentType, Suspense } from "react";

const Loadable =
  <P extends object>(Component: ComponentType<P>) =>
  (props: P) =>
    (
      <Suspense fallback={<p>loading...</p>}>
        <Component {...props} />
      </Suspense>
    );

export default Loadable;
