import * as React from "react";

export interface PageLoadingProps {
    loadStatus: string,
    fetch: () => void
}

export const LoadingSpinner = () => (
    <div>...loading</div>
)
export const withLoader = <P extends object>(
    Component: React.ComponentClass<P> | React.SFC<P>
): React.SFC<P & PageLoadingProps> => ({
    loadStatus,
    fetch,
    ...props
}: PageLoadingProps) => {
        fetch();
        if (loadStatus === "loading") {
            return <LoadingSpinner />
        } else {
            return <Component {...props} />
        }


        //   <Trigger action={fetch}>
        //         {loadStatus === "loaded" && (
        //             <>
        //                 {saveStatus === "saving" && (
        //                     <div className="loader__container loader__container--overlay">
        //                         <LoadingSpinner />
        //                     </div>
        //                 )}
        //                 <Component {...props} />
        //             </>

        //         )}
        //         {loadStatus === "failed" && (
        //             <div onClick={fetch}>Failed</div>
        //         )}
        //         {loadStatus === "loading" && (
        //              <div className="loader__container loader__container--overlay">
        //                 <LoadingSpinner />
        //             </div>
        //         )}
        //   </Trigger>
    };
