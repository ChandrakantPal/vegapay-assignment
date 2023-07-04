import * as React from "react";
import { PaginationType, SearchedResultType } from "@/types/user";
import KitDataRow from "../DataRows/KitDataRow";
import PersonalizedSalesDataRow from "../DataRows/PersonalizedSalesDataRow";
import ReissueDataRow from "../DataRows/ReissueDataRow";

const KitTableHeader: string[] = [
  "Customer Name",
  "Card No",
  "Email",
  "Mobile No.",
  "Card Network",
  "Action",
];

const PersonalizedSalesTableHeader: string[] = [
  "Name",
  "Program Name",
  "Customer ID",
  "Card No",
  "Expiry Date",
  "Activation Date",
  "Status",
  "Details",
];

const ReissueTableHeader: string[] = [
  "Kit No",
  "Name",
  "Program Name",
  "Customer ID",
  "Card No",
  "Expiry Date",
  "Activation Date",
  "Status",
  "Details",
];

const TableHeaderMapping: Record<string, string[]> = {
  kit: KitTableHeader,
  personalizedSales: PersonalizedSalesTableHeader,
  reissue: ReissueTableHeader,
};

interface TabContentProps {
  data: SearchedResultType[];
  pagination: PaginationType;
  activeTab: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const TabContent: React.FC<TabContentProps> = ({
  data,
  pagination,
  activeTab,
  setCurrentPage,
}) => {
  return (
    <div>
      {data.length > 0 && (
        <div className="flex flex-col overflow-x-auto rounded-xl">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="sticky top-0 bg-white">
              <tr>
                {TableHeaderMapping[activeTab].map((item, index) => (
                  <th
                    key={`${item}-${index}`}
                    className="px-6 py-3 text-sm font-semibold tracking-wider text-left text-blue-900 uppercase"
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((item, index) => {
                const key = `${item?.customer?.clientId}-${index}`;
                if (activeTab === "kit") {
                  return <KitDataRow data={item} key={key} />;
                }
                if (activeTab === "personalizedSales") {
                  return <PersonalizedSalesDataRow key={key} data={item} />;
                }
                return <ReissueDataRow key={key} data={item} />;
              })}
            </tbody>
            <tfoot className="bg-white divide-y divide-gray-200">
              <tr className="w-full">
                <td colSpan={TableHeaderMapping[activeTab].length}>
                  <div className="min-w-full px-4 py-3 bg-white sm:px-6">
                    <div className="flex items-center justify-end">
                      <div>
                        {pagination.pageNumber + 1}-{pagination.numberOfItems}{" "}
                        of
                        {pagination.totalPages}
                      </div>
                      <div>
                        {/* Previous Page Button */}
                        <button
                          onClick={() => {
                            setCurrentPage((current) => current - 1);
                          }}
                          disabled={pagination.pageNumber === 0}
                          className="px-2 py-1 text-sm font-medium text-gray-500 rounded-md hover:bg-gray-50"
                        >
                          {"<"}
                        </button>
                        {/* Next Page Button */}
                        <button
                          onClick={() => {
                            setCurrentPage((current) => current + 1);
                          }}
                          disabled={
                            pagination.pageNumber >= pagination.totalPages
                          }
                          className="px-2 py-1 ml-3 text-sm font-medium text-gray-500 rounded-md hover:bg-gray-50"
                        >
                          {">"}
                        </button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  );
};

export default TabContent;
