import React, { useContext, createContext } from "react";
import { useState, useEffect, useCallback } from "preact";
import { Neurosity  } from "@neurosity/sdk";
import useLocalStorage from "use-local-storage";

const [neurosity, setNeurosity] = useState(null);
  const [user, setUser] = useState(null);
  const [deviceId, setDeviceId] = useLocalStorage("deviceId");
  const [loading, setLoading] = useState(true);

//get the deviceid or else we are still loading
useEffect(() => {
    if (deviceId) {
      const neurosity = new Neurosity({ deviceId });
      setNeurosity(neurosity);
    } else {
      setLoading(false);
    }
  }, [deviceId]);

//set the user once we know the device
useEffect(() => {
    if (!neurosity) {
      return;
    }
  
    const subscription = neurosity.onAuthStateChanged().subscribe((user) => {
      if (user) {
        setUser(user);
      } else {
        navigate("/");
      }
      setLoading(false);
    });
  
    return () => {
      subscription.unsubscribe();
    };
  }, [neurosity]);

  //
export const crown = new Notion({
  autoSelectDevice: false
});

const initialState = {
  selectedDevice: null,
  status: null,
  user: null,
  loadingUser: true
};

export const NotionContext = createContext();

export const useNotion = () => {
  return useContext(NotionContext);
};

export function ProvideNotion({ children }) {
  const notionProvider = useProvideNotion();

  return (
    <NotionContext.Provider value={notionProvider}>
      {children}
    </NotionContext.Provider>
  );
}

function useProvideNotion() {
  const [
    lastSelectedDeviceId,
    setLastSelectedDeviceId
  ] = useLocalStorage("deviceId");

  const [state, setState] = useState({
    ...initialState
  });

  const { user, selectedDevice } = state;

  const setSelectedDevice = useCallback((selectedDevice) => {
    setState((state) => ({
      ...state,
      selectedDevice
    }));
  }, []);

  useEffect(() => {
    if (user && !selectedDevice) {
      notion.selectDevice((devices) =>
        lastSelectedDeviceId
          ? devices.find(
              (device) => device.deviceId === lastSelectedDeviceId
            )
          : devices[0]
      );
    }
  }, [user, lastSelectedDeviceId, selectedDevice]);

  useEffect(() => {
    if (!selectedDevice) {
      return;
    }

    const subscription = notion.status().subscribe((status) => {
      setState((state) => ({ ...state, status }));
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [selectedDevice]);

  useEffect(() => {
    setState((state) => ({ ...state, loadingUser: true }));

    const subscription = notion
      .onAuthStateChanged()
      .subscribe((user) => {
        setState((state) => ({
          ...state,
          user,
          loadingUser: false
        }));
      });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const sub = notion.onDeviceChange().subscribe((selectedDevice) => {
      setSelectedDevice(selectedDevice);
      setLastSelectedDeviceId(selectedDevice.deviceId); // cache locally
    });

    return () => {
      sub.unsubscribe();
    };
  }, [setSelectedDevice, setLastSelectedDeviceId]);

  const logoutNotion = useCallback(() => {
    return new Promise((resolve) => {
      notion.logout().then(resolve);
      setState({ ...initialState, loadingUser: false });
    });
  }, []);

  return {
    ...state,
    lastSelectedDeviceId,
    setLastSelectedDeviceId,
    logoutNotion,
    setSelectedDevice
  };
}