import Button from "../button/Button";
import React, {useState} from "react";
import {LanguageContext} from "../../../translations/language";
import getTranslations from "../../../translations/translations";
import useHttp from "../../../hooks/http.hook";
import Spinner from "../spinner/Spinner";

const ShowMore = ({fetchFuncData, setData, setHasNextPage}) => {

    const [language, setLanguage] = React.useContext(LanguageContext);
    const translation = getTranslations(language, "main");

    const {request, loading} = useHttp(fetchFuncData);
    const [wasClicked, setWasClicked] = useState(false);
    const [nextPage, setNextPage] = useState(2);

    const onClickMore = () => {
        setWasClicked(true);

        const queryParams = {
            "page": nextPage
        }

        request(queryParams).then((response) => {

            setData(prevState => {
                const newState = response.data;
                newState.results.vacancies = [...prevState.results.vacancies, ...newState.results.vacancies];
                return newState;
            });

            setNextPage((prevState) => ++prevState);
        }).catch(() => {
            setHasNextPage(false);
        }).finally(() => {
            setWasClicked(false);
        })
    }

    return wasClicked && loading ? <Spinner loading={loading} isElement={true}/> : (
        <Button additionalClass={"vacancies-section__loadmore"}
                onClick={onClickMore}
                className="button-link">{translation["Показати більше"]}</Button>
    );
}

export default ShowMore;