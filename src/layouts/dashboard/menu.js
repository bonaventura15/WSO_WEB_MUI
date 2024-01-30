
import Link from 'next/link';

export const Menu = (props) => {

    return (
        <>
            <div style={{ display: 'flex', }}>
                <Link href="/">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12.5" cy="12.5" r="11.5" fill="#C68A29" stroke="#77592A" stroke-width="2" />
                        <path d="M13 5C11.35 5 10 6.68 10 8.75C10 10.82 11.35 12.5 13 12.5C14.65 12.5 16 10.82 16 8.75C16 6.68 14.65 5 13 5ZM9.865 12.5C8.275 12.575 7 13.88 7 15.5V17H19V15.5C19 13.88 17.74 12.575 16.135 12.5C15.325 13.415 14.215 14 13 14C11.785 14 10.675 13.415 9.865 12.5Z" fill="#E5E0D9" />
                    </svg>
                </Link>
                <div style={{ marginLeft: '10px' }}>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="23" height="23" fill="#C68A29" stroke="#77592A" stroke-width="2" />
                    </svg>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <Link href="/auth/update-data">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12.5" cy="12.5" r="11.5" fill="#C68A29" stroke="#77592A" stroke-width="2" />
                        <path d="M12.5 15L15 12.5H13.125V6.875H11.875V12.5H10L12.5 15ZM18.125 6.875H14.375V8.11875H18.125V16.8875H6.875V8.11875H10.625V6.875H6.875C6.1875 6.875 5.625 7.4375 5.625 8.125V16.875C5.625 17.5625 6.1875 18.125 6.875 18.125H18.125C18.8125 18.125 19.375 17.5625 19.375 16.875V8.125C19.375 7.4375 18.8125 6.875 18.125 6.875ZM12.5 15L15 12.5H13.125V6.875H11.875V12.5H10L12.5 15ZM19.375 6.875H14.375V8.11875H18.125V16.8875H6.875V8.11875H10.625V6.875H5.625V18.125H19.375V6.875Z" fill="#E5E0D9" />
                    </svg>
                </Link>
                <div style={{ marginLeft: '10px' }}>
                    <Link href="/auth/register">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12.5" cy="12.5" r="11.5" fill="#C68A29" stroke="#77592A" stroke-width="2" />
                            <path d="M11.25 7.5H13.75V10H11.25V7.5ZM7.5 15H10V17.5H7.5V15ZM7.5 11.25H10V13.75H7.5V11.25ZM7.5 7.5H10V10H7.5V7.5ZM15 7.5H17.5V10H15V7.5ZM11.875 16.1625V17.5H13.1875L16.925 13.7687L15.6 12.4437L11.875 16.1625ZM13.75 12.5187V11.25H11.25V13.75H12.5187L13.75 12.5187ZM18.0312 12.225L17.15 11.3437C17.025 11.2187 16.8313 11.2187 16.7062 11.3437L16.0437 12.0062L17.3688 13.3313L18.0312 12.6688C18.1562 12.5438 18.1562 12.35 18.0312 12.225Z" fill="#E5E0D9" />
                        </svg>
                    </Link>
                </div>
            </div>
        </>
    );
};
