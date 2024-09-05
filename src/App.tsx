const WidgetOne = () => {
    return <div>'WidgetOne'</div>
}
const WidgetTwo = () => {
    return <div>'WidgetTwo'</div>
}
const WidgetThree = () => {
    return <div>'WidgetThree'</div>
}

export const App = () => {
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h2>Список виджетов</h2>
                <WidgetOne />
                <WidgetTwo />
                <WidgetThree />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h2>Настройки виджетов</h2>
                <div>widget 1 <input type="checkbox" /></div>
                <div>widget 2 <input type="checkbox" /></div>
                <div>widget 3 <input type="checkbox" /></div>
                <button style={{ alignSelf: 'flex-start' }}>Сохранить</button>
            </div>
        </div>
    );
};