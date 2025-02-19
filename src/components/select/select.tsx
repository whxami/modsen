import { FC, useState, useCallback } from 'react';
import styles from './select.module.scss';

enum SortOrder {
    ASC = 'asc',
    DESC = 'desc',
    NONE = 'none',
}

interface SelectProps {
    onSelect: (sortOrder: SortOrder) => void;
}

const Select: FC<SelectProps> = ({ onSelect }) => {
    const [selected, setSelected] = useState<SortOrder>(SortOrder.NONE);
    const [isOpen, setIsOpen] = useState(false);

    const handleBlur = useCallback(() => {
        setTimeout(() => setIsOpen(false), 200);
    }, []);

    const handleOptionClick = useCallback(
        (option: SortOrder) => {
            setSelected(option);
            onSelect(option);
            setIsOpen(false);
        },
        [onSelect]
    );

    const renderOptionText = (option: SortOrder) => {
        if (option === SortOrder.NONE) {
            return 'Выберите сортировку';
        }
        return option === SortOrder.ASC ? 'по возрастанию' : 'по убыванию';
    };

    return (
        <div className={styles.selectContainer}>
            <button
                className={styles.selectButton}
                onClick={() => setIsOpen(!isOpen)}
                onBlur={handleBlur}
            >
                <span>{renderOptionText(selected)}</span>
                <span className={styles.icon}>&#9662;</span>
            </button>
            {isOpen && (
                <div className={styles.selectDropdown}>
                    {Object.values(SortOrder).map((option) => (
                        <div
                            key={option}
                            className={`${styles.selectOption} ${selected === option ? styles.selected : ''}`}
                            onClick={() => handleOptionClick(option)}
                        >
                            {renderOptionText(option)}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Select;
