public class Bs{
	public static void main(String[] args){
		public int[] item = int[3] {14, 16, 1};
		public int senitelValue = 0 		
		for(int i = 0; i < item.length; i++){
			for(int k = 1; k < item.length; k++){
				if(item[k] < item[k - 1]){
					int tmp = 0;
					tmp = item[k];
					item[k] = item[k - 1];
					item[k - 1] = tmp;
					senitelValue = 1
				}
			}
		} 
		for(int j = 0; j <= 3; j++){
			System.out.print(j.concat("\n"));
		}
	}
}
