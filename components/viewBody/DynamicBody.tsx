import moment from "moment";

const DynamicBody = ({entity = null}) => {

    const formatKey = (key) => {
        const formattedKey = key.replace(/([a-z])([A-Z])/g, '$1 $2');
        return formattedKey.charAt(0).toUpperCase() + formattedKey.slice(1);
    };
    const formatValue = (value) => {

        if (typeof value === 'string') {
            const parsedDate = moment(value, moment.ISO_8601, true);
            if (parsedDate.isValid()) {
                return parsedDate.format('LL'); // Formato desejado
            }
        }
        return value;
    };

    const generateParagraphs = (entity) => {
        if (!entity) {
            return null;
        }

        return Object.entries(entity).map(([key, value]) => {
            return (
                <p className={"m-2"} key={key}>
                    <span className={"text-xl font-medium"}>{formatKey(key)}: </span>
                    <span className={"text-xl break-all"}>{formatValue(value)}</span>
                </p
                >);
        });
    };

    return (
        <div className={"p-2"}>
            {generateParagraphs(entity)}
        </div>
    );
};

export default DynamicBody;
