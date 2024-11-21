import {useMemo} from "react";
import API from "../api/client";

const useAPIClient = (lang) => useMemo(() => new API(lang), [lang]);

export default useAPIClient;