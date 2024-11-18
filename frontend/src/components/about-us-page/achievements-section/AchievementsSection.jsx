import "./AchievementsSection.css";

const AchievementsSection = () => {


    return (
        <section className="achiev-section">
            <div className="container">
                <div className="achiev-section-content">
                    <h2 className="achiev-section__title">Досягнення</h2>
                    <p className="achiev-section__desc">«Юні Сервіс» представляє собою приклад успішного бізнесу, що
                        поєднує інновації, якість, безпеку і соціальну відповідальність, що дозволяє їй не тільки
                        досягати високих результатів, але й забезпечувати стійкий розвиток у глобальному масштабі.</p>
                    <ul className="achiev-section-list">
                        <li className="achiev-section-list__item">
                            <div className="achiev-section-list__item-header">
                                <p className="achiev-section-list__item-header__percent">95%</p>
                                <h3 className="achiev-section-list__item-header__title">Досягнення точності у
                                    бурінні</h3>
                            </div>
                            <p className="achiev-section-list__item-desc">Впровадження інноваційних систем управління та
                                контролю дозволило досягти 95% точності у бурінні, що зменшує кількість помилок і
                                збільшує ефективність роботи, знижуючи потребу в корекційних заходах.</p>
                        </li>
                        <li className="achiev-section-list__item">
                            <div className="achiev-section-list__item-header">
                                <p className="achiev-section-list__item-header__percent">40%</p>
                                <h3 className="achiev-section-list__item-header__title">Підвищення безпеки</h3>
                            </div>
                            <p className="achiev-section-list__item-desc">Завдяки впровадженню нових систем моніторингу
                                та контролю, а також регулярним тренінгам для працівників, компанія досягла зниження
                                кількості аварійних ситуацій і нещасних випадків на 40%.</p>
                        </li>
                        <li className="achiev-section-list__item">
                            <div className="achiev-section-list__item-header">
                                <p className="achiev-section-list__item-header__percent">20%</p>
                                <h3 className="achiev-section-list__item-header__title">Скорочення часу на виконання
                                    проектів</h3>
                            </div>
                            <p className="achiev-section-list__item-desc">Завдяки впровадженню передових бурових роботів
                                та програмного забезпечення для планування і контролю, компанія скоротила середній час
                                на завершення проектів на 20%. Це дозволяє швидше реалізовувати завдання та знижувати
                                затрати на роботу.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default AchievementsSection