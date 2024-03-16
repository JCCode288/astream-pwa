import React from "react";
import SplashScreen from "./Views/Splash";
import { useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { init } from "./stores/root.action";

function AppWrapper(WrappedApp) {
  const AppWrapped = (props) => {
    const dispatcher = useDispatch();

    const { loading } = useSelector(({ app }) => app);

    const fetchAll = useCallback(async () => {
      try {
        await dispatcher(init());
      } catch (err) {
        console.log(err);
      }
    }, [dispatcher]);

    useEffect(() => {
      fetchAll();
    }, [fetchAll]);

    if (loading) return <SplashScreen />;

    return <WrappedApp {...props} />;
  };

  return AppWrapped;
}

export default AppWrapper;
